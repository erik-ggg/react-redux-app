import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useHistory } from 'react-router-dom';

// Internationalization
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

const EmployeesTableEditable = props => {
  const [columns, setColumns] = useState(props.columns);
  const { t } = useTranslation();

  // History
  const history = useHistory();

  useEffect(() => {
    setColumns(props.columns);
  }, [props.columns]);

  return (
    <MaterialTable
      title={t('table.title')}
      actions={[
        {
          icon: 'list',
          tooltip: 'List user',
          onClick: (event, rowData) => {
            history.push(`/employee/${rowData.id}`);
          }
        }
      ]}
      localization={{
        body: {
          addTooltip: t('table.actions.add_tooltip'),
          deleteTooltip: t('table.actions.delete_tooltip'),
          editTooltip: t('table.actions.edit_tooltip')
        },
        pagination: {
          labelRowsSelect: t('tableRowDisplayed')
        },
        toolbar: {
          searchTooltip: t('table.actions.search_tooltip'),
          searchPlaceholder: t('table.actions.search_placeholder')
        },
        header: { actions: t('table.headers.actions') }
      }}
      columns={columns}
      data={_.cloneDeep(props.employees)}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              props.onAdd(newData);
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                props.onUpdate(oldData.id, newData);
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              props.onDelete(oldData.id);
            }, 600);
          })
      }}
    ></MaterialTable>
  );
};

export default EmployeesTableEditable;

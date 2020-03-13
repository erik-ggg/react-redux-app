import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { fetchEmployees } from '../redux/slices/employeeSlices';

// Internationalization
import { useTranslation } from 'react-i18next';

const EmployeeApiActions = () => {
  const { t } = useTranslation(['translation']);
  const dispatch = useDispatch();

  const updateState = () => {
    dispatch(fetchEmployees());
  };

  return (
    <ul className='list-group'>
      <button
        className='list-group-item active'
        onClick={updateState.bind(this)}
      >
        {t('translation:api_get')}
      </button>
    </ul>
  );
};

export default EmployeeApiActions;

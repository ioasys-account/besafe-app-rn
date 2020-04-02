import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as profileActions } from 'store/ducks/profile';
import { ProfilePresentation } from 'components/presentation/Profile';

const ProfileContainer = () => {
  const [values, setValues] = useState({
    name: '',
    gender: {
      label: '',
      value: ''
    },
    date: new Date()
  });

  const dispatch = useDispatch();
  const reducer = useSelector(({ profile }) => profile);

  useEffect(() => {
    dispatch(profileActions.updateProfileRequest());
  }, []);

  useEffect(() => {
    dispatch(profileActions.updateProfileSuccess());
  }, [reducer.data]);

  useEffect(() => {
    dispatch(profileActions.updateProfileFail());
  }, [reducer.errors]);

  const setFieldValue = (field, value) => {
    setValues({
      ...values,
      [field]: value
    });
  };

  return (
    <ProfilePresentation
      setFieldValue={setFieldValue}
      values={values}
      isLoading={reducer.isLoading}
      errors={reducer.errors}
    />
  );
};

export default ProfileContainer;

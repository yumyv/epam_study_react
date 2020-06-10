import React from 'react';
import {connect} from 'react-redux';
import {getLocalization} from '../features/homepage/selectors';
import {setLanguage} from '../features/homepage/actions';
import enFile from '../global/localization/en';
import uaFile from '../global/localization/ua';

export const withTranslation = (WrappedComponent) => {
  const mapStateToProps = (state) => ({
    localization: getLocalization(state),
  });

  const mapDispatchToProps = {
    setLanguageDispatch: setLanguage
  };

  class NewComponent extends React.Component {
    static displayName = `WithTranslation(${WrappedComponent.displayName})`;

    render() {
      const {localization, setLanguageDispatch} = this.props;
      if (localization === 'en') {
        setLanguageDispatch(enFile);
      } else if (localization === 'ua') {
        setLanguageDispatch(uaFile);
      }

      return <WrappedComponent {...this.props}/>;
    }
  }

  const withConnect = connect(mapStateToProps, mapDispatchToProps);

  return withConnect(NewComponent);
};

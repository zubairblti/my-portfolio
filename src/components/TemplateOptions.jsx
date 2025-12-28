const TemplateOptions = () => {
  return (
    <div className="color-palate">
      <div className="color-icon">
        <button className="open-color">
          <i className="ti ti-settings-filled"></i>
        </button>
        <button className="close-color">
          <i className="ti ti-x"></i>
        </button>
      </div>
      <div className="color-palate-inner">
        <div className="group">
          <h6 className="not-cursor">Color Mode</h6>
          <ul className="color-version">
            <li className="active cursor-pointer dark-mode">Dark</li>
            <li className="box cursor-pointer light-mode">Light</li>
          </ul>
        </div>
        <div className="group">
          <h6 className="not-cursor">Direction</h6>
          <ul className="rtl-version">
            <li className="active cursor-pointer ltr-yes">LTR</li>
            <li className="cursor-pointer ltr-no">RTL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TemplateOptions;


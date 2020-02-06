import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

// import "./styles.css";

const languageName = {
  en: "English",
  ko: "한국어",
  zh: "中文",
}

const Language = () => {
  const [isToggled, setToggled] = React.useState(false);
  return (
    <div>
      <div className={`right-nav ${isToggled ? `show ` : `hide`}`}
        style={{
          float: `right`,
          position: `relative`
        }}
      >
        <div className="menu-btn" onClick={() => setToggled(!isToggled)}
          style={{
            cursor: `pointer`,
          }}
        >
          <IntlContextConsumer>
            {({ languages, language: currentLocale }) =>
              languages.map(language => (
                <span  className={currentLocale === language ? `active` : ``} >
                  {languageName[language]}
                </span>
              ))
            }
          </IntlContextConsumer> <img className="desktop-img" src="/images/Header/down-arrow.svg" />
          <img className="mobile-img" src="/images/Header/down-arrow-blue.svg" /> </div>
        <div className={`subMenu ${isToggled ? `show` : `hide`}`}>
          <IntlContextConsumer>
            {({ languages, language: currentLocale }) =>
              languages.map(language => (
                <a
                  key={language}
                  onClick={() => changeLocale(language)}
                  className={currentLocale === language ? `active` : ``}
                >
                  {languageName[language]}
                </a>
              ))
            }
          </IntlContextConsumer>
        </div>
      </div>
    </div>
  )
}

export default Language

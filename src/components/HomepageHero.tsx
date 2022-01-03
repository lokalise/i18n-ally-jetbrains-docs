import React from 'react';

export default function HomepageHero(): JSX.Element {
    return (
        <section className="section hero">
            <div className="container">
                <header className="hero-header">
                    <h1 className="headline align-center">Extract hardcoded strings from Vue templates</h1>
                    <p>
                        i18n Ally is a plugin that makes internationalization easy.{' '}
                        Skip copy-pasting and ad-hoc regexes, leverage automatic string extraction, and save time for things that matter.
                    </p>
                </header>

                <div className="hero-cta">
                    <a className="js-install-btn button button--green" data-ui-source="homepage"
                       href="https://plugins.jetbrains.com/plugin/17212-i18n-ally">
                        Plugin for JetBrains IDEs
                    </a>
                </div>

                <div className="hero-cta">
                    <a className="js-install-btn button button--green" data-ui-source="homepage"
                       href="https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally">
                        Extension for VS Code
                    </a>
                </div>
            </div>
        </section>
    );
}

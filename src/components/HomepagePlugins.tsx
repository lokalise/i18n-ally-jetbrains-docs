import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepagePlugins(): JSX.Element {
    return (
        <section className="section plugins">
            <div className="container">
                <div className="plugins-columns">
                    <h2 className="headline align-center">How the plugin works</h2>


                    <div className="plugins-item">
                        <div className="plugins-item__image">
                            <img src={useBaseUrl('/img/homepage/plugins/how-it-works-scan.svg')}
                                 alt="Scan for hardcoded strings"/>
                        </div>

                        <div className="plugins-item__text">
                            <h3 className="subheadline">Scan for hardcoded strings</h3>
                            <p>Go into Tools &gt; “Run i18n Ally inspections...” to find hardcoded strings in the
                                project, folder or particular file.</p>
                        </div>
                    </div>

                    <div className="plugins-item">
                        <div className="plugins-item__image">
                            <img src={useBaseUrl('/img/homepage/plugins/how-it-works-extract.svg')}
                                 alt="Extract matches"/>
                        </div>

                        <div className="plugins-item__text">
                            <h3 className="subheadline">Extract matches</h3>
                            <p>Use quick fix to extract hardcoded string<br/>from source code into a language file.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageConfiguration(): JSX.Element {
    return (
        <section className="section configuration">
            <div className="container">
                <h2 className="subheadline align-center">
                    Plug and play configuration
                </h2>
                <div className="configuration-items">
                    <div className="configuration-item">
                        <img src={useBaseUrl('/img/homepage/configuration/vue-autoconfig-logo.svg')}
                             style={{width: '100%', maxHeight: 'none'}} />
                    </div>
                    <div className="configuration-item">
                        <img src={useBaseUrl('/img/homepage/configuration/nuxt-autoconfig-logo.svg')}
                             style={{width: '75%', maxHeight: 'none', paddingTop: '5%'}}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

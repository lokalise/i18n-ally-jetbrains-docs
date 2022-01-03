import React, {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

export default function HomepageWays(): JSX.Element {
    const [activeSide, setActiveSide] = useState('left');
    return (
        <section className="section ways">
            <div className="container">
                <h2 className="headline align-center">Free up time for things that matter</h2>

                <div className="ways-controls">
                    <button onClick={() => setActiveSide('left')}
                            className={clsx({'ways-control--active': activeSide == 'left'})}
                            type="button">
                        The regular way
                    </button>
                    <button onClick={() => setActiveSide('right')}
                            className={clsx({'ways-control--active': activeSide == 'right'})}
                            type="button">
                        With i18n Ally
                    </button>
                </div>

                <div className="ways-columns">
                    <div className={clsx('ways-column', 'ways-column--left', {'ways-column--active': activeSide == 'left'})}>
                        <h3 className="ways-subtitle">The regular way</h3>
                        <div className="ways-image">
                            <img src={useBaseUrl('/img/homepage/supports/regular.png')} alt="The regular way"/>
                        </div>
                    </div>
                    <div className={clsx('ways-column', 'ways-column--right', {'ways-column--active': activeSide == 'right'})}>
                        <h3 className="ways-subtitle">Automated with i18n Ally</h3>
                        <div className="ways-image">
                            <img src={useBaseUrl('/img/homepage/supports/ally.png')} alt="The regular way"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

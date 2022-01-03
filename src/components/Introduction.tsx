import React from "react";
import clsx from 'clsx';
import styles from './Introduction.module.css';

export default function Introduction(): JSX.Element {
    return (
        <main className="margin-top--lg">
            <div className="row">
                <article className={clsx("col col--4")}>
                    <a className={clsx("card margin-bottom--lg padding--lg", styles.cardContainer, styles.cardContainerLink)}
                       href="/jetbrains/features">
                        <h2 className={clsx("text--truncate", styles.cardTitle)} title="Features">
                            📄️ Features
                        </h2>
                        <div className={clsx("text--truncate", styles.cardDescription)}
                             title="Navigation, autocompletion, localisation hints, extraction, autoconfiguration">
                            Navigation, autocompletion, localisation hints, extraction, autoconfiguration etc.
                        </div>
                    </a>
                </article>
                <article className={clsx("col col--4")}>
                    <a className={clsx("card margin-bottom--lg padding--lg", styles.cardContainer, styles.cardContainerLink)}
                       href="/jetbrains/language-files/javascript">
                        <h2 className={clsx("text--truncate", styles.cardTitle)} title="Supported File Formats">
                            🗃️ Supported File Formats
                        </h2>
                        <div className="text--truncate cardDescription_5VZh" title="5 items">
                            js, ts, json, yaml, php, xliff v1, xliff v2, po, pot
                        </div>
                    </a>
                </article>
                <article className={clsx("col col--4")}>
                    <a className={clsx("card margin-bottom--lg padding--lg", styles.cardContainer, styles.cardContainerLink)}
                       href="/jetbrains/sources">
                        <h2 className={clsx("text--truncate", styles.cardTitle)} title="Supported Source Code">
                            📄️ Supported Source Code
                        </h2>
                        <div className="text--truncate cardDescription_5VZh" title="Internationalize source code">
                            Internationalize source code
                        </div>
                    </a>
                </article>
            </div>
        </main>
    );
}


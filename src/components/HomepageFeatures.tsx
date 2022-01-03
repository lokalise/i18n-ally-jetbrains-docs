import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className="section features">
            <div className="container">
                <h2 className="headline align-center">Features</h2>
                <div className="features-columns">

                    <div className="features-item">
                        <div className="features-item__image">
                            <img src={useBaseUrl('/img/homepage/features/extract-hardcoded-strings-all-at-once.svg')}
                                 alt="Extract hardcoded strings all at once"/>
                        </div>
                        <div className="features-item__title">
                            Extract hardcoded strings all at once
                        </div>
                    </div>

                    <div className="features-item">
                        <div className="features-item__image">
                            <img
                                src={useBaseUrl('/img/homepage/features/detect-hardcoded-strings-in-the-whole-project-folder-file.svg')}
                                alt="Detect missing strings in the whole project, folder or file"/>
                        </div>
                        <div className="features-item__title">
                            Detect missing strings in the whole project, folder or file
                        </div>
                    </div>

                    <div className="features-item">
                        <div className="features-item__image">
                            <img src={useBaseUrl('/img/homepage/features/spot-hardcoded-string-in-editor.svg')}
                                 alt="Spot hardcoded string in editor"/>
                        </div>
                        <div className="features-item__title">Spot hardcoded string in editor</div>
                    </div>

                    <div className="features-item">
                        <div className="features-item__image">
                            <img src={useBaseUrl('/img/homepage/features/extract-hardcoded-strings-one-by-one.svg')}
                                 alt="Extract hardcoded strings one by one"/>
                        </div>
                        <div className="features-item__title">
                            Extract hardcoded strings one by one
                        </div>
                    </div>

                    <div className="features-item">
                        <div className="features-item__image">
                            <img src={useBaseUrl('/img/homepage/features/jump-from-editor-to=language-file.svg')}
                                 alt="Navigate from the editor to the language file"/>
                        </div>
                        <div className="features-item__title">
                            Navigate from the editor to the language file
                        </div>
                    </div>

                    <div className="features-item">
                        <div className="features-item__image">
                            <img src={useBaseUrl('/img/homepage/features/rename-keys-and-placeholders-in-place.svg')}
                                 alt="Rename keys and placeholders in-place, right in the editor pane."/>
                        </div>
                        <div className="features-item__title">
                            Rename keys and placeholders in-place, right in the editor pane.
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

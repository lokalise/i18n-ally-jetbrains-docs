import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHero from "@site/src/components/HomepageHero";
import HomepageConfiguration from "@site/src/components/HomepageConfiguration";
import HomepageWays from "@site/src/components/HomepageWays";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepagePlugins from "@site/src/components/HomepagePlugins";

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout title={siteConfig.title}>
            <HomepageHero/>
            <HomepageConfiguration/>
            <HomepageWays/>
            <HomepageFeatures/>
            <HomepagePlugins/>
        </Layout>
    );
}

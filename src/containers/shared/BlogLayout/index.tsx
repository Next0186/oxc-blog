import React, { Suspense } from 'react'
import { Layout, Col, Row } from 'antd'

import styles from './index.scss'
import Header from './Header'
import SiderBar from './SiderBar'
import PageLoading from '@shared/PageLoading'
import Footer from './Footer'

const BlogLayout: React.FC = ({ children }) => {
    const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 }
    const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

    return (
        <Layout className={styles.appContainer}>
            <Header />
            <Row className={styles.mainWrapper}>
                <Col {...siderLayout}>
                    <SiderBar />
                </Col>
                <Col className={styles.rightCol} {...contentLayout}>
                    <div className={styles.contentLayout}>
                        <Suspense fallback={<PageLoading />}>{children}</Suspense>
                    </div>
                </Col>
            </Row>
            <Footer />
        </Layout>
    )
}

export default BlogLayout

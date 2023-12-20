import { FunctionComponent, ReactNode } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export interface LayoutProps {
    children: JSX.Element
}

export function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}

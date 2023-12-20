import { FunctionComponent } from 'react';
import { Page, Content } from './styles';
import Image from "next/image";
import backgroundImage from "@/public/icons/logo-footer.svg";

export interface LayoutProps {
    children: JSX.Element
}

export function AuthLayout({ children }: LayoutProps): JSX.Element {
    return (
        <Page style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
            backgroundSize: 'contain',
        }}>
            <Content>{children}</Content>
        </Page>
    )
};

export const withAuthLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AuthLayout>
                <Component {...props} />
            </AuthLayout>
        )
    }
}
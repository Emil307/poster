import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Content, Left, Right } from "./styles";
import { AutoCompleteInput } from "@/components/v1/AutoCompleteInput/AutoCompleteInput";
import { SingleSelect } from "@/ui/v1/SingleSelect/SingleSelect";
import { Button } from "@/ui/v1/Button/Button";

export const Header = (): JSX.Element => {
    return <Container>
        <Content>
            <Left>
                <Image src="/icons/logo-header.svg" alt="my ticket" width={83} height={32} priority={true} />
                <AutoCompleteInput />
            </Left>
            <Right>
                <Button styleType="tertiary" style={{ fontSize: "12px", width: "62px", height: "31px" }}>
                    <Link href='/SignIn'>Войти</Link>
                </Button>
            </Right>
        </Content>
    </Container>
}

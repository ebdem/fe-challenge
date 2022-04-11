import * as React from "react";
import { LayoutWrapper } from "../components/layout/Layout";
import { Text } from "../components/common";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutWrapper>
            <Text
                fontSize="2rem"
                fontWeight={700}
                color="#FA4616"
                textAlign="center"
                padding="0"
                textDecoration="none"
                textTransform="capitalize"
                fontFamily="Montserrat"
                margin="30px 0 0 0 "
            >MagicHesap</Text>
            <Text
                fontSize="16px"
                fontWeight={500}
                color="#000"
                textAlign="center"
                padding="0"
                textDecoration="none"
                textTransform="capitalize"
                fontFamily="Montserrat"
                margin="0 0 50px 0"
            >Hesap Uzmanı</Text>
            {children}
        </LayoutWrapper>
    );
}
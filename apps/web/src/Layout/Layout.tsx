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
            >MagicHesap</Text>
            <Text
                fontSize="16px"
                fontWeight={400}
                color="#000"
                textAlign="center"
                padding="0"
                textDecoration="none"
                textTransform="capitalize"
                fontFamily="Montserrat"
            >Hesap Uzmanı</Text>
            {children}
        </LayoutWrapper>
    );
}
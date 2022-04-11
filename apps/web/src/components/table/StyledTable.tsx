import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../common";
import {
    STable,
    STBody,
    STBodyTR,
    STD,
    STH,
    STHead,
    STHeadTR,
    Wrap,
} from "./TableStyle";

const handleCurrency = (currency: any) => {
    if (currency === 'TRY') {
        return '₺'
    }
    if (currency === 'USD') {
        return '$'
    }
    if (currency === 'GBP') {
        return '£'
    }
    return '₺' // default
}

const handleCurrencyText = (currency: any) => {
    if (currency === 'TRY') {
        return 'Türk Lirası'
    }
    if (currency === 'USD') {
        return 'ABD Doları'
    }
    if (currency === 'GBP') {
        return 'İngiliz Sterlini'
    }
    return 'Türk lirası' // default
}

const Table = ({ data }: any) => {
    return (
        <Wrap>
            <STable>
                <STHead>
                    <STHeadTR>
                        <STH></STH>
                        <STH>
                            <Text
                                fontSize="12px"
                                fontWeight={700}
                                color="#000"
                                padding="0"
                                textDecoration="none"
                                fontFamily="Montserrat"
                            >
                                Hesap Adı
                            </Text></STH>
                        <STH><Text
                            fontSize="12px"
                            fontWeight={700}
                            color="#000"
                            padding="0"
                            textDecoration="none"
                            fontFamily="Montserrat"
                        >
                            Para Birimi
                        </Text></STH>
                        <STH><Text
                            fontSize="12px"
                            fontWeight={700}
                            color="#000"
                            padding="0"
                            textDecoration="none"
                            fontFamily="Montserrat"
                        >
                            Hesap No
                        </Text></STH>
                    </STHeadTR>
                </STHead>
                <STBody>
                    {data.map((obj: any, index: any) => (
                        <STBodyTR onClick={() => localStorage.setItem('item', JSON.stringify(obj))} key={index}>
                            <STD><Link className="link" to={`/accounts/${obj.id}`}> <Text
                                fontSize="16px"
                                fontWeight={500}
                                color="#000"
                                textAlign="left"
                                padding="0"
                                textDecoration="none"
                                textTransform="capitalize"
                                fontFamily="Montserrat"
                            >
                                {handleCurrency(obj.currency)}
                            </Text></Link></STD>
                            <STD> <Link className="link" to={`/accounts/${obj.id}`}>{obj.name}</Link></STD>
                            <STD> <Link className="link" to={`/accounts/${obj.id}`}>{handleCurrencyText(obj.currency)}</Link></STD>
                            <STD> <Link className="link" to={`/accounts/${obj.id}`}>{obj.accountNumber}</Link></STD>
                        </STBodyTR>
                    ))}
                </STBody>
            </STable>
        </Wrap>
    );
};

export default Table;

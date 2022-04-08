import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import IconButton from '../components/iconButton';



export default function Home() {
    return (
        <Layout>
            <Link to="/accounts">
                <IconButton title="Hoşgeldiniz" />
            </Link>
        </Layout>
    )
}
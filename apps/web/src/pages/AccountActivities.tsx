import * as React from 'react';
import { useParams, useHistory } from "react-router-dom"
import Layout from '../Layout/Layout';
import { api } from '../http/axiosInstance';
import { CurrencyField } from '../components/common/index'
import { TurkeySVG, BritishSVG, UsaSVG } from "../assets/svg/flags"
import { TrySVG, DollarSVG, GbtSVG } from "../assets/svg/currency"
import { Text, Divider } from "../components/common";
import IconButton from '../components/iconButton';
import { BiArrowBack } from "react-icons/bi";
import { FaPlus, FaCheck } from "react-icons/fa";
import ModalManager from '../components/modal/ModalManager';
import Modal from '../components/modal/Modal';
import { StyledInput } from '../components/input/Input';
import { Select } from '../components/select/Select';
import { RadioButton, RadioButtonLabel, Item } from '../components/radioButton/RadioButton';



type ActivityParams = {
    id: string;
};

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
export default function AccountActivities() {
    const [data, setData] = React.useState([]);
    const [value, setValue] = React.useState(0);
    const [convAmount, setConvAmount] = React.useState(0);
    const [date, setDate] = React.useState(today);
    const [desc, setDesc] = React.useState('');
    const [type, setType] = React.useState('');
    const [convType, setConvType] = React.useState(0);
    const [selectCurrency, setSelectCurrency] = React.useState('');
    const history = useHistory();
    const { id } = useParams<ActivityParams>();
    const getAcrtivities = () => {
        api.get(`/activity?accountId=${id}`).then(res => {

            setData(res.data);
        }).catch((err) => {
            console.log(err);
            history.push('/');
        })
    }

    React.useEffect(() => {
        getAcrtivities();
    }, [])

    const handleChange = (e: any) => {
        e.preventDefault();
        const conv = e.target.value
        setValue(e.target.value);
        setConvAmount(parseInt(conv));

    }

    const handleSelectCurrency = (e: any) => {
        e.preventDefault();
        setSelectCurrency(e.target.value);
    }

    const handleCreateActivity = (e: any, hideModal: any) => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        e.preventDefault();
        api.post('/activity', {
            accountId: parseInt(id),
            description: desc,
            amount: convAmount,
            type: convType,
            createdAt: date.toISOString()
        }).then(() => {
            getAcrtivities();
            hideModal();
            setValue(0);
            setDesc('');
            setSelectCurrency('');
        })

    }

    const handleDateChange = (e: any) => {
        e.preventDefault();
        const timeElapsed = e.target.valueAsNumber;
        const today = new Date(timeElapsed);
        setDate(today);

    }



    const handleChangeDesc = (e: any) => {
        e.preventDefault();
        setDesc(e.target.value);
    }

    const handleSelectType = (e: any) => {
        e.preventDefault();
        const conv = e.target.value
        setType(e.target.value);
        setConvType(parseInt(conv));


    }

    const selectFlag = () => {
        const info = localStorage.getItem('item');
        const data = JSON.parse(info);

        if (data.currency === 'TRY') {
            return <TurkeySVG />;
        }
        if (data.currency === 'GBP') {
            return <BritishSVG />;
        }

        if (data.currency === 'USD') {
            return <UsaSVG />;
        }
        return TurkeySVG;

    }

    const handleName = () => {
        const info = localStorage.getItem('item');
        const data = JSON.parse(info);
        return data.name;
    }

    const selectSign = () => {
        const info = localStorage.getItem('item');
        const data = JSON.parse(info);

        if (data.currency === 'TRY') {
            return <div>{data.accountNumber + " " + "-" + " "}Türk Lirası (<TrySVG />)</div>;
        }
        if (data.currency === 'GBP') {
            return <div>{data.accountNumber + " " + "-" + " "}Sterlin (<GbtSVG />)</div>;
        }

        if (data.currency === 'USD') {
            return <div>{data.accountNumber + " " + "-" + " "}Dolar (<DollarSVG />)</div>;
        }
        return TurkeySVG;

    }



    return (
        <Layout>

            <ModalManager>
                {({ showModal, hideModal, visible }) => {
                    return (
                        <React.Fragment>
                            <div className='activityButtons'>
                                <IconButton icon={<BiArrowBack />} title="Ana Sayfa" onClick={() => history.push("/accounts")} />
                                <IconButton icon={<FaPlus />} title="Yeni Hesap" onClick={() => showModal()} />
                            </div>

                            <Modal onClose={() => hideModal()} visible={visible}>
                                <div className='modalContent'>
                                    <Text
                                        fontSize="24px"
                                        fontWeight={700}
                                        color="#000"
                                        textAlign="left"
                                        padding="0"
                                        textDecoration="none"
                                        textTransform="capitalize"
                                        fontFamily="Montserrat"
                                    >
                                        Yeni Hesap Ekle
                                    </Text>
                                    <div style={{ display: "flex" }}>
                                        <div className='section1'>
                                            <Text
                                                fontSize="16px"
                                                fontWeight={700}
                                                color="#FA4616"
                                                textAlign="left"
                                                padding="0"
                                                textDecoration="none"
                                                textTransform="capitalize"
                                                fontFamily="Montserrat"
                                            >
                                                Tarih
                                            </Text>
                                            <StyledInput margin="0 15px 0 0" width="100px" type="date" placeholder="Tarih" value={date} onChange={handleDateChange} />
                                        </div>
                                        <div className='section1'>
                                            <Text
                                                fontSize="16px"
                                                fontWeight={700}
                                                color="#FA4616"
                                                textAlign="left"
                                                padding="0 0 0 10px"
                                                textDecoration="none"
                                                textTransform="capitalize"
                                                fontFamily="Montserrat"
                                            >
                                                Kategori
                                            </Text>
                                            <Select value={selectCurrency} onChange={handleSelectCurrency} radius='12px' color='#333333' background='#fff' width='170px' height='50px' padding='5px 10px' >
                                                <option value="GBP">GBP</option>
                                                <option value="TRY">TRY</option>
                                                <option value="USD">USD</option>
                                            </Select>
                                        </div>
                                        <div className='section1'>
                                            <Text
                                                fontSize="16px"
                                                fontWeight={700}
                                                color="#FA4616"
                                                textAlign="left"
                                                padding="0"
                                                textDecoration="none"
                                                textTransform="capitalize"
                                                fontFamily="Montserrat"
                                            >
                                                Tutar
                                            </Text>
                                            <StyledInput margin="0 0 0 15px" type="number" width="100px" placeholder="Tutar" value={value} onChange={handleChange} />
                                        </div>

                                    </div>
                                    <div className='section1'>
                                        <Text
                                            fontSize="16px"
                                            fontWeight={700}
                                            color="#FA4616"
                                            textAlign="left"
                                            padding="0"
                                            textDecoration="none"
                                            textTransform="capitalize"
                                            fontFamily="Montserrat"
                                        >
                                            Açıklama
                                        </Text>
                                        <StyledInput height="100px" width="100%" placeholder="Açıklama" value={desc} onChange={handleChangeDesc} />
                                    </div>
                                    <div className='section1'>
                                        <Text
                                            fontSize="16px"
                                            fontWeight={700}
                                            color="#FA4616"
                                            textAlign="left"
                                            padding="0"
                                            textDecoration="none"
                                            textTransform="capitalize"
                                            fontFamily="Montserrat"
                                        >
                                            Hareket Türü
                                        </Text>
                                        <div style={{ display: "flex" }}>
                                            <Item>
                                                <RadioButton
                                                    type="radio"
                                                    name="radio"
                                                    value="1"
                                                    checked={type === "1"}
                                                    onChange={handleSelectType}
                                                />
                                                <RadioButtonLabel />
                                                <div>Gelir</div>
                                            </Item>
                                            <Item>
                                                <RadioButton
                                                    type="radio"
                                                    name="radio"
                                                    value="0"
                                                    checked={type === "0"}
                                                    onChange={handleSelectType}
                                                />
                                                <RadioButtonLabel />
                                                <div>Gider</div>
                                            </Item>
                                        </div>

                                    </div>
                                </div>
                                <div className='saveButton'>
                                    <IconButton icon={<FaCheck />} title="Yeni Hesap" onClick={(e: any) => handleCreateActivity(e, hideModal)} />
                                </div>
                            </Modal>
                        </React.Fragment>
                    );
                }}
            </ModalManager>



            <CurrencyField >
                {selectFlag()}
                <div>
                    <Text
                        fontSize="16px"
                        fontWeight={700}
                        color="#FA4616"
                        textAlign="left"
                        padding="0 0 0 10px"
                        textDecoration="none"
                        textTransform="capitalize"
                        fontFamily="Montserrat"
                    >{handleName()}</Text>
                    <Text
                        fontSize="16px"
                        fontWeight={700}
                        color="#000"
                        textAlign="left"
                        padding="0 0 0 10px"
                        textDecoration="none"
                        textTransform="capitalize"
                        fontFamily="Montserrat"
                    > {selectSign()}</Text>

                </div>
            </CurrencyField>
            <div className='activityButtons'>
                <Text
                    fontSize="16px"
                    fontWeight={700}
                    color="#FA4616"
                    textAlign="left"
                    padding="0"
                    textDecoration="none"
                    textTransform="capitalize"
                    fontFamily="Montserrat"
                >
                    Hesap Hareketleri
                </Text>
                <Text
                    fontSize="16px"
                    fontWeight={700}
                    color="#000"
                    textAlign="left"
                    padding="0"
                    textDecoration="none"
                    textTransform="capitalize"
                    fontFamily="Montserrat"
                >
                    {data.length + " " + "Sonuç"}
                </Text>
            </div>
            <div>
                {data.map((item) => {

                    const year = item.createdAt.toString().substring(0, 4);
                    const day = item.createdAt.toString().substring(8, 10);
                    const month = item.createdAt.toString().substring(5, 7);
                    const d = new Date(year, month, day);
                    const mo = new Intl.DateTimeFormat('tr', { month: 'short' }).format(d);
                    const da = new Intl.DateTimeFormat('tr', { day: '2-digit' }).format(d);
                    const amount = () => {
                        if (item.type === 0) {
                            return (
                                <Text
                                    fontSize="16px"
                                    fontWeight={500}
                                    color="#FA4616"
                                    textAlign="left"
                                    padding="0"
                                    textDecoration="none"
                                    textTransform="capitalize"
                                    fontFamily="Montserrat"
                                >
                                    - {item.amount}
                                </Text>
                            )
                        }

                        return (
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                color="#008000"
                                textAlign="left"
                                padding="0"
                                textDecoration="none"
                                textTransform="capitalize"
                                fontFamily="Montserrat"
                            >
                                + {item.amount}
                            </Text>
                        )
                    }

                    return (
                        // eslint-disable-next-line react/jsx-no-useless-fragment
                        (<div key={item.id}>
                            <Divider />
                            <div className='history' >

                                <div style={{
                                    display: "flex",
                                    width: "630px",
                                }}>

                                    <Text
                                        fontSize="16px"
                                        fontWeight={500}
                                        color="#000"
                                        textAlign="left"
                                        padding="0"
                                        textDecoration="none"
                                        textTransform="capitalize"
                                        fontFamily="Montserrat"
                                    >
                                        {da}/{mo}
                                    </Text>

                                    <Text
                                        fontSize="16px"
                                        fontWeight={500}
                                        color="#000"
                                        textAlign="left"
                                        padding="0"
                                        textDecoration="none"
                                        textTransform="capitalize"
                                        fontFamily="Montserrat"
                                    >
                                        {item.description}
                                    </Text>
                                </div>
                                <Text
                                    fontSize="16px"
                                    fontWeight={500}
                                    color="#000"
                                    textAlign="left"
                                    padding="0"
                                    textDecoration="none"
                                    textTransform="capitalize"
                                    fontFamily="Montserrat"
                                >
                                    {amount()}
                                </Text>
                            </div>
                        </div>
                        )
                    )
                })}
            </div >
        </Layout >
    )
}
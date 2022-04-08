import * as  React from 'react';
import { StyledInput } from '../components/input/Input';
import { Select } from '../components/select/Select';
import { FaPlus, FaCheck } from "react-icons/fa";
import IconButton from '../components/iconButton';
import { Text } from '../components/common';
import ModalManager from '../components/modal/ModalManager';
import Modal from '../components/modal/Modal';
import StyledTable from '../components/table/Table';
import Layout from '../Layout/Layout';
import { api } from '../http/axiosInstance';


function AccountList() {
  const [value, setValue] = React.useState('');
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [data, setData] = React.useState([]);
  const [selectCurrency, setSelectCurrency] = React.useState('');

  const search = (e: any) => {
    setSearchText(e.target.value.toLowerCase())

    const filterData = data.filter((item) => {
      if (searchText === '') {
        return item
      }
      return item.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredData(filterData)
  }

  const handleChange = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
    console.log(value);
  }

  const handleSelectCurrency = (e: any) => {
    e.preventDefault();
    setSelectCurrency(e.target.value);
  }

  const handleCreateAccount = (e: any, hideModal: any) => {
    e.preventDefault();
    api.post('/account', {
      name: value,
      currency: selectCurrency
    }).then(() => {
      getAccounts();
      hideModal();
      setValue('');
      setSelectCurrency('');
    })
  }


  const getAccounts = () => {
    api.get('/account').then(res => {
      setData(res.data);
    })
  }

  React.useEffect(() => {
    getAccounts();
  }, [])
  return (

    <div>

      <Layout>
        <div className='main'>
          <div className='section1'>
            <Text
              fontSize="24px"
              fontWeight={700}
              color="#FA4616"
              textAlign="left"
              padding="0"
              textDecoration="none"
              textTransform="capitalize"
              fontFamily="Montserrat"
            >
              Arama
            </Text>
            <StyledInput type="search" placeholder="Hesap No veya Hesap Adı ile arayın..." value={searchText} onChange={search} />
          </div>
          <div className='section1'>
            <Text
              fontSize="24px"
              fontWeight={700}
              color="#FA4616"
              textAlign="left"
              padding="0"
              textDecoration="none"
              textTransform="capitalize"
              fontFamily="Montserrat"
            >
              Hesap Tipi
            </Text>
            <Select radius='12px' color='#333333' background='#fff' width='170px' height='50px' padding='5px 10px' >
              <option value="TRY">TRY</option>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
            </Select>
          </div>
          <div className='button'>
            <ModalManager>
              {({ showModal, hideModal, visible }) => {
                return (
                  <React.Fragment>
                    <IconButton icon={<FaPlus />} title="Yeni Hesap" onClick={() => showModal()} />
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
                              Arama
                            </Text>
                            <StyledInput placeholder="MC Bonus" value={value} onChange={handleChange} />
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
                              Hesap Tipi
                            </Text>
                            <Select value={selectCurrency} onChange={handleSelectCurrency} radius='12px' color='#333333' background='#fff' width='170px' height='50px' padding='5px 10px' >
                              <option value="GBP">GBP</option>
                              <option value="TRY">TRY</option>
                              <option value="USD">USD</option>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <div className='saveButton'>
                        <IconButton icon={<FaCheck />} title="Yeni Hesap" onClick={(e: any) => handleCreateAccount(e, hideModal)} />
                      </div>
                    </Modal>
                  </React.Fragment>
                );
              }}
            </ModalManager>
          </div>
        </div>
        <div className='table'>
          <StyledTable data={filteredData && filteredData.length > 0 ? filteredData : data} />

        </div>

      </Layout>
    </div>

  );
}

export default React.memo(AccountList);

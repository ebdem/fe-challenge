import { Button, Text } from '../common';


export default function IconButton({ icon, title, onClick }: any) {
    return (
        <Button
            flexDirection='row'
            display='flex'
            border="1px solid #FA4616"
            color="#fff"
            background="#FA4616"
            padding="0"
            height="50px"
            onClick={onClick}
            radius="12px"
            width="150px"
            justifyContent='space-evenly'
            alignItems='center'
        >
            {icon}
            <Text
                textTransform='uppercase'
                color="#fff"
                fontSize="16px"
                padding="0"
                textAlign="center"
                fontWeight="medium"
                fontFamily="Montserrat"
                textDecoration='none'
            > {title}</Text>
        </Button>
    )
}
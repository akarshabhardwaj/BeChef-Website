import React from 'react'
import style from "./Login.module.css"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    InputLeftElement,
    Icon
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { BsFillPersonFill } from 'react-icons/bs';
import { MdPassword,MdEmail } from 'react-icons/md';

const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [details, setDetails] = React.useState({
        name: "",
        email: "",
        password: ""
    });
    const [show, setShow] = React.useState(false)
    const handleChange = (e) => {
        let type = e.target.name;
        console.log(type);
        const value = e.target.value;
        setDetails({ ...details, [type]: value });
    }
    console.log(details)
    const handleClick = () => setShow(!show)
    return (
        <>
            <button className={style.Login} onClick={onOpen}>
                LOGIN
            </button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent style={{backgroundColor:"#0a1e3bbd",opacity:"0.6"}}>
                    <ModalHeader style={{margin:"auto",color:"white"}}>WELCOME</ModalHeader>
                    <ModalBody style={{marginBottom:"1rem"}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" style={{ width: "50%", margin: "auto" }} />
                        <h1 style={{ paddingLeft: "0.5rem", fontWeight: "500", color: "white" }}>Enter Name</h1>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<Icon as={BsFillPersonFill} color='white' boxSize={8} marginTop={"0.3rem"} />}
                            />
                            <Input placeholder='Name' name='name' onChange={(e)=>handleChange(e)} size='lg' color={"white"}/>
                        </InputGroup>
                        <br />
                        <h1 style={{ paddingLeft: "0.5rem", fontWeight: "500", color: "white" }}>Enter Email ID</h1>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<Icon as={MdEmail} color='white' boxSize={8} marginTop={"0.3rem"} />}
                            />
                            <Input placeholder='Email ID' name="email" type="email" onChange={(e)=>handleChange(e)} size='lg' color={"white"}/>
                        </InputGroup>
                        <br />
                        <h1 style={{ paddingLeft: "0.5rem", fontWeight: "500", color: "white" }}>Enter Password</h1>
                        <InputGroup size='md'>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<Icon as={MdPassword} color='white' boxSize={8} marginTop={"0.3rem"} />}
                            />
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                name="password"
                                placeholder='Enter password'
                                onChange={(e)=>handleChange(e)}
                                size='lg'
                                color={"white"}
                            />
                            <InputRightElement width='4.5rem' marginTop={"0.2rem"}>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <br />
                        <div style={{ display:"flex",justifyContent:"center" }}>
                            <Button mr={3}>Login</Button>
                        </div>
                    </ModalBody>
                    <hr />
                    <ModalFooter className={style.close} style={{display:"flex",justifyContent:"center",paddingLeft:"1rem"}} onClick={onClose}>
                            Close
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Login
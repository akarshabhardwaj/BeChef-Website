import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import  React ,{ useState }  from 'react';
import { Link } from "react-router-dom"
import {AuthContext} from '../ContextAdmin/AdminAuthContext';

export default function AdminLogin() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [forward, setForward] = useState(false)
    const val=React.useContext(AuthContext)

    const Signin = async () => {
        console.log("Admin")
        //        // e.preventDefault()
        //         console.log(email,pass)
        //         let res=await fetch(`http://localhost:8080/admin/login`,{
        //             method:"POST",
        //             headers:{

        //                 "Content-type":"application/json"
        //             },
        //             body:JSON.stringify({email,pass})
        //         })
        //         let out=await res.json()
        //         console.log(out)
        //         if(out.msg==="Welcome Admin"){
        //    setForward(true)
     
        fetch("http://localhost:8080/admin/login", {
            method: "POST",
            body: JSON.stringify({email,pass}),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.msg !== "wrong cred") {
                    console.log(res)
                    // localStorage.setItem("userName", res.userName)
                    // localStorage.setItem("token", res.token)
                    if(res.admin==true){
                        console.log("YOU are admin")
                        val.handleAuth();
                    }
                } else {
                    alert("Error")
                }
            })
            .catch(err => console.log(err, "catch"))
    }

    // console.log(forward)
    // alert(out.msg)




return (
    <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
            spacing={4}
            w={'full'}
            maxW={'md'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={12}>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                Enter new password
            </Heading>
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                    placeholder="your-email@example.com"
                    _placeholder={{ color: 'gray.500' }}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={pass}
                    onChange={(e) => setPass(e.target.value)} />
            </FormControl>
            <Stack spacing={6}>
                <Link to="/admin">
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={() => { Signin() }}
                    >
                        Log In Admin
                    </Button>
                </Link>
            </Stack>
        </Stack>
    </Flex>
);
  }
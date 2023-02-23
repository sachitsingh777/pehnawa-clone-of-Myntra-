import React from 'react'
import {Box, Flex, Grid, Image, Link,Text} from "@chakra-ui/react"
function Footer() {
    return (
      
        <Grid templateColumns='repeat(3, auto)' bg={"#fafbfc"} >
            <Flex style={{ backgroundColor: "#fafbfc", display: "flex", justifyContent: "end", gap: "20px", paddingRight: "100px" }}>
                <Box> <Link href='' style={{ fontWeight: "500", textDecoration: "none" }}>ONLINE SHOPPING </Link><br />

                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Men</Link> <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Women</Link>  <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Kids</Link> <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Home & Living</Link>  <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Beauty</Link>  <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Gift Cards</Link>   <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Myntra Insider</Link>
                    </Box>
                
                <Box> <Link href='' style={{ fontWeight: "500", textDecoration: "none" }}>USEFUL LINKS </Link><br />

                    <Link>Men</Link> <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Contact Us</Link>  <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>FAQS</Link> <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>T&C </Link>  <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Term Of Use</Link>  <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Track Orders</Link>   <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>SHipping</Link> <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Cancellation</Link>  <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Returns</Link> <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Whitehat</Link>  <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Blogs</Link>  <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Careers</Link>   <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Privacy policy</Link>  <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Site Map</Link>  <br />
                    <Link href="" style={{ textDecoration: "none", fontSize: "13px" }}>Corporate information</Link>
                </Box>
            </Flex>
            <Box style={{  backgroundColor: "#fafbfc" }}>

                <Text style={{ fontWeight: "500" }}>EXPERINCE MYNTRA APP ON MOBILE</Text>
                <Flex >
                    <Link href="https://play.google.com/store/apps/details?id=com.myntra.android">
                        <Image style={{ width: "140px", height: "42px" }} src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" />
                    </Link>
                    <Link href="https://apps.apple.com/in/app/myntra-indias-fashion-store/id907394059">
                        <Image  style={{ width: "140px", height: "42px", marginLeft: "10px" }} src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" />
                    </Link>


                </Flex>
                <Box>
                    <Box style={{ fontSize: "12px", fontWeight: "500", textAlign: "center",marginRight:"200px" ,marginTop:"20px" }}>KEEP IN TOUCH</Box>
                    <Flex style={{ display: "flex", justifyContent: "center" ,marginRight:"165px" ,marginTop:"20px"}}>
                        <a href=""><Image  style={{ width: "20px", padding: "5px" }} src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="" /></a>
                        <a href=""><Image  style={{ width: "20px", padding: "5px" }} src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="" /></a>
                        <a href=""><Image  style={{ width: "30px", padding: "5px" }} src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="" /></a>
                        <a href=""><Image  style={{ width: "20px", padding: "5px" }} src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="" /></a>


                    </Flex>
                </Box>


            </Box>
            <Box style={{ backgroundColor: "#fafbfc" }}>
                <Flex style={{ display: "flex" ,width:"300px"}}>
                    <Box> <Image src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" /></Box>
                    <Box style={{marginTop:"10px"}} ><strong style={{ fontWeight: "500" }}>100% Original</strong>guarantee for all products at myntra.com</Box>
                    
                    <br />

                </Flex>
                <Flex >
                    <Box> <Image src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="" /></Box>
                    <Box style={{marginTop:"10px"}} ><strong style={{ fontWeight: "500" }}>Return within 30days</strong>of receiving your order</Box>
                    
                    <br />

                </Flex>
            </Box>

        </Grid>
    )
}

export default Footer
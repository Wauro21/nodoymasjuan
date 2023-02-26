import { Global } from "@emotion/react";
import { IonButton, IonFooter, IonToolbar } from "@ionic/react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import React from "react";
import { AiFillHome, AiFillPlusSquare, AiOutlineHome, AiOutlinePlusSquare } from "react-icons/ai";
import { BsChat, BsFillChatFill } from "react-icons/bs";
import { HiOutlineUserCircle, HiUserCircle } from "react-icons/hi";
import { RiEditBoxFill, RiEditBoxLine } from "react-icons/ri";
import { Slides } from "../Constants";


const drawerBleeding = 56;

export default function Menu (){

    const [drawer_status, setDrawer] = React.useState(false);

    const [home_icon, setHomeIco] = React.useState(true);
    const [documentos_icon, setDocsIco] = React.useState(false);
    const [solicitud_icon, setSolIco]  = React.useState(false);
    const [rrhh_icon, setRRHHIco] = React.useState(false);
    const [profile_icon, setProfileIco] = React.useState(false);

    const [value, setValue] = React.useState(0);

    const handleDrawer = (slide_key:Slides) => {
        // Drawer is open
        if(drawer_status){
            setDrawer(false);
            // // Call from different tab -> Change to that tab
            // if(slide_select !== slide_key) selectSlide(slide_key);
            // // From same tab -> Close drawer
            // else setDrawer(false);
        }
        // Drawer is closed -> Open drawer && setSlide to button value
        else{
            // selectSlide(slide_key);
            setDrawer(true);
        }
    };

    
    const iconHandler = (id:string) => {
        // Set false to all
        setHomeIco(false);
        setDocsIco(false);
        setSolIco(false);
        setRRHHIco(false);
        setProfileIco(false);
        
        switch(id){
            case 'Home':
                setHomeIco(true);
                break;

            case 'Documentos':
                setDocsIco(true);
                break;

            case 'Solicitud':
                setSolIco(true);
                break;

            case 'RRHH':
                setRRHHIco(true);
                break;

            case 'Profile':
                setProfileIco(true);
                break;

            default:
                console.log('Not a valid tab bar button id');
        }
    }

    return(
        <IonFooter>
                {/* <IonButton
                    onClick={handleDrawer(true)}
                >
                    OPEN
                </IonButton> */}
                <Global
                    styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                    }}
                />
                <SwipeableDrawer
                    variant="persistent"
                    anchor="bottom"
                    open= {drawer_status}
                    onClose={() => setDrawer(false)}
                    onOpen = {() => setDrawer(true)}
                    swipeAreaWidth = {drawerBleeding}
                    disableSwipeToOpen={true}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: -drawerBleeding,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            visibility: 'visible',
                            right: 0,
                            left: 0,
                            pointerEvents: 'all',
                        }}
                    >
                        {/* <h1> inside drawe</h1> */}
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {setValue(newValue)}}
                        >                
                            <BottomNavigationAction 
                                id='Home' 
                                label='Home' 
                                icon= {home_icon? <AiFillHome size = "30" />: <AiOutlineHome size='30'/> } 
                                onClick={
                                    (value)=>{
                                        // handleBody(Body.Home); 
                                        iconHandler(value.currentTarget.id)
                                        setDrawer(false);
                                    }
                                }
                            />

                            <BottomNavigationAction
                                id='Documentos' 
                                label='Documentos' 
                                icon= {documentos_icon? <RiEditBoxFill size='30'/>: <RiEditBoxLine size='30'/>} 
                                onClick={
                                    (value) => {
                                        handleDrawer(Slides.Documentos);
                                        iconHandler(value.currentTarget.id)
                                    }
                                }
                            />

                            <BottomNavigationAction
                                id='Solicitud' 
                                label='Solicitud' 
                                icon= {solicitud_icon? <AiFillPlusSquare size='30'/>: <AiOutlinePlusSquare size='30'/>} 
                                onClick={
                                    (value) => {
                                        handleDrawer(Slides.Solicitudes); 
                                        iconHandler(value.currentTarget.id);
                                    }
                                }/>

                            <BottomNavigationAction
                                id='RRHH' 
                                label='RRHH' 
                                icon = {rrhh_icon? <BsFillChatFill size='30'/>:<BsChat size='30'/>} 
                                onClick={
                                    (value)=>{
                                        // handleBody(Body.RRHH); 
                                        iconHandler(value.currentTarget.id)
                                        // closeDrawer();
                                        setDrawer(false);
                                }
                            }/>

                            <BottomNavigationAction
                                id='Profile' 
                                label='Perfil' 
                                icon = {profile_icon? <HiUserCircle size='30'/>:<HiOutlineUserCircle size='30'/>} 
                                onClick={
                                    (value)=>{
                                        // handleBody(Body.Profile); 
                                        iconHandler(value.currentTarget.id)
                                        // closeDrawer();
                                        setDrawer(false);
                                }
                            }/>
                        </BottomNavigation>
                    </Box>

                    <h1>WOWOWO CONTENT</h1>

                </SwipeableDrawer>
        </IonFooter>
    )
}
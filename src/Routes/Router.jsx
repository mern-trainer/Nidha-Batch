import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LearnState from '../Components/state'
import Effect from '../Pages/Effect'
import ProfileUpdate from '../Pages/ProfileUpdate'
import PasswordUpdate from '../Pages/PasswordUpdate'
import Formik from '../Components/Formik'
import Formik2 from '../Components/Formik2'
import Redux from '../Pages/Redux'
import Dynamic from '../Pages/Dynamic'
import A from '../Pages/A'
import B from '../Pages/B'

const Router = () => {
    return <BrowserRouter>
        <Routes>
            {/* <Route path="/effect" Component={Effect} />
            <Route path="/ecommerce" Component={ApiCall} />
            <Route path="/todo" Component={LearnState} />

            <Route path="/settings/profile/info" Component={A} />
            <Route path="/settings/profile/update" Component={B} />
            <Route path="/settings/profile/password" Component={B} /> */}
            <Route path="/">
                <Route path="a" Component={A} />
                <Route path="b" Component={B} />
                <Route path="" Component={LearnState} />
                <Route path='formik1' Component={Formik} />
                <Route path="redux">
                    <Route path="" Component={Redux} />
                    <Route path=":id" Component={Dynamic} />
                </Route>
                <Route path='formik2' Component={Formik2} />
                <Route path="settings">
                    <Route path="" Component={Effect} />
                    <Route path="profile">
                        <Route path="update" Component={ProfileUpdate} />
                        <Route path="password" Component={PasswordUpdate} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default Router

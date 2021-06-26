import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'
import { Route } from 'react-router-dom'
import SingleMail from './SingleMail'

function Dashboard() {
    return (
        <>
            <Sidebar />
            <Header />
            {/* <SingleMail /> */}
            <Route exact path="/">
                <Body title="Your Scheduled Mails" type="pending" />
            </Route>
            <Route exact path="/new_mail">
                <Body title="Schedule a mail" type="new_mail" />
            </Route>
            <Route exact path="/history">
                <Body title="Your Mail History" type="sent" />
            </Route>
        </>
    )
}

export default Dashboard

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Account } from "pages/Account/Account";
import { LayoutStyles } from "./LayoutStyle";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import { useState } from "react";
import { AccountSetting } from "pages/Account/Setting/AccountSetting";
import { ThankYou } from "pages/ThankYou/ThankYou";
import { ErrorRoute } from "pages/ErrorRoute/ErrorRoute";
import { CMS } from "pages/CMS/CMS";
import { Login } from "pages/Login/Login";
import { Register } from "pages/Register/Register";
import { CompanyList } from "pages/CompanyList/CompanyList";
import { PublisherList } from "pages/PublisherList/PublisherList";
import { Usage } from "pages/Usage/Usage";
import { UsageAdd } from "pages/Usage/UsageAdd/UsageAdd";

export default function Layout() {
  const classes = LayoutStyles();
  const [status, setStatus] = useState(true);

  return (
    <Router>
      <Sidebar mobileStatus={status} action={()=>setStatus(false)}/>
      <div className={classes.container}>
        <Header mobileAction={()=>setStatus(true)} />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/account' element={<Account />} />
          <Route path='/account/setting' element={<AccountSetting />} />
          <Route path="/companylist" element={<CompanyList/>}/>
          <Route path="/publisherlist" element={<PublisherList/>}/>
          <Route path="/cms" element={<CMS/>}/>
          <Route path='/404' element={<ErrorRoute />} />
          <Route path='/thankyou' element={<ThankYou />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/usage" element={<Usage/>}/>
          <Route path='/usage/add' element={<UsageAdd />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

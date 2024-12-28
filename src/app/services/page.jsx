import React from 'react';
import Service from "../../components/services/services/service";
import BusinessVenture from "../../components/services/services/businessventure";
import Ourproducts from "../../components/services/services/ourproducts";

function Page() {
    return (
        <>
            <Service />
            <BusinessVenture/>
            <Ourproducts/>
        </>
    );
}

export default Page;
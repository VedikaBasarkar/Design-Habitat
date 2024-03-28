'use client';

import React, {useEffect} from "react";
    
    const HubspotForms = props => {
        const { region, portalId, formId } = props;
        useEffect(() => {
            const script = document.createElement('script');
            script.src='https://js.hsforms.net/forms/embed/v2.js';
            document.body.appendChild(script);
    
            script.addEventListener('load', () => {
                // @TS-ignore
                if (window.hbspt) {
                    // @TS-ignore
                    window.hbspt.forms.create({
                        region: region,
                        portalId: portalId,
                        formId: formId,
                        target: '#hubspotForm'
                    })
                }
            });
        }, []);
    
        return (
            <div>
                <div id="hubspotForm"></div>
            </div>
        );
    };
    
    export default HubspotForms;

// Course form
//     <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
// <script>
//   hbspt.forms.create({
//     region: "na1",
//     portalId: "45699251",
//     formId: "03ba78e1-18ea-46de-a197-8435242ab524"
//   });
// </script>


// contact form 
/* <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "45699251",
    formId: "496431e0-1cc5-4b15-b969-2399a8e47e9d"
  });
</script> */
let me = this;
        let view = me.getView(),
            form = Ext.getCmp('memberdetailsform');
        let formData = form.getValues();


        let status = MssPhoenix.model.Session.getMembershipStatus();
        let fileField = Ext.getCmp("document");

        if (status === 'DEFERRED' && me.changed && fileField &&  fileField.getValue()=== null){
            me.showAlert("To complete the change of Address please upload a\n" +
                "valid proof of address in the Upload Documents field.");
            return;
        }

        if (form && form.validate()) {

            let updatesMade = (
                formData.title !== me.originalValues.title ||
                formData.firstname !== me.originalValues.firstname ||
                formData.surname !== me.originalValues.surname ||
                formData.othernames !== me.originalValues.othernames ||
                formData.maritalStatusName !== me.originalValues.maritalStatusName ||
                formData.email !== me.originalValues.email ||
                formData.secondaryEmail !== me.originalValues.secondaryEmail ||
                formData.cellPhone !== me.originalValues.cellPhone ||
                formData.secondaryPhone !== me.originalValues.secondaryPhone ||
                formData.town !== me.originalValues.town ||
                formData.country !== me.originalValues.country ||
                formData.postalAddress !== me.originalValues.postalAddress
            );

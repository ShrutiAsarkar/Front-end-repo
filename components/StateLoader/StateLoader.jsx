class StateLoader {

    loadState() {
        try {
            let serializedState = localStorage.getItem("http://localhost:state");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("http://localhost:state", serializedState);

        }
        catch (err) {
        }
    }

    initializeState() {
        return {
            id : null,
            role :null,
            company : {
                companyName:"",
                companyPhone:"",
                companyAddress:"",
                companySignatory:{},
                singleAdd:"",
                taxInfo : {},
                paySchedule : {},
                bankAccount : {},
            },
            employeeDetails : {},
            compensation : {},
            payroll : {
                data:{},
                empData:[]
            },
            userName : null,
            backendHost : "localhost",
            backendPort : "5000",
            backendUrl : "http://localhost:5000"
        }
    };
}

export default StateLoader;

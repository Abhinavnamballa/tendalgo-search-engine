import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Searcher extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num : "accuracy",
            list: this.props.data,
            list2 : this.props.mons,
            list3: ["No Mons Found"],
            listfinal: ["No Mons Found Final"],
            value : [],
            skill1 : [],
            skill2 : [],
            skill3 : [],
            skill4 : [],
            skill5 : [],
            S1 : [],
            S2 : [], 
            S3 : [], 
            S4 : [], 
            filter : "",
            filteredlist: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSkill1 = this.handleSkill1.bind(this)
        this.handleSkill2 = this.handleSkill2.bind(this)
        this.handleSkill3 = this.handleSkill3.bind(this)
        this.handleSkill4 = this.handleSkill4.bind(this)
        this.handleSkill5 = this.handleSkill5.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
        
    }


    handleSkill1(event) {
            let target = event.target;
            let value = target.name;
            let copy = [...this.state.skill1]
            let valueList = [...copy, value]
            this.setState(() => ({
                skill1 : valueList
            }))

            if (event.target.checked === false){
                for(let i = 0; i < this.state.skill1.length; i++){
                    if(this.state.skill1[i] === value){
                        copy.splice(i,1);
                    }
                }
                this.setState(() => ({
                    skill1 : copy
                }))
            }
    }

    handleSkill2(event) {
        let target = event.target;
        let value = target.name;
        let copy = [...this.state.skill2]
        let valueList = [...copy, value]
                this.setState(() => ({
                skill2 : valueList
            }))

        if (event.target.checked === false){
            for(let i = 0; i < this.state.skill2.length; i++){
                if(this.state.skill2[i] === value){
                    copy.splice(i,1);
                }
            }
            this.setState(() => ({
                skill2 : copy
            }))
        }
        

    }
    handleSkill3(event) {
        let target = event.target;
        let value = target.name;
        let copy = [...this.state.skill3]
        let valueList = [...copy, value]
            this.setState(() => ({
                skill3 : valueList
            }))

            if (event.target.checked === false){
                for(let i = 0; i < this.state.skill3.length; i++){
                    if(this.state.skill3[i] === value){
                        copy.splice(i,1);
                    }
                }
                this.setState(() => ({
                    skill3 : copy
                }))
            }
    }
    handleSkill4(event) {
        let target = event.target;
        let value = target.name;
        let copy = [...this.state.skill4]
        let valueList = [...copy, value]
            this.setState(() => ({
                skill4 : valueList
            }))

            if (event.target.checked === false){
                for(let i = 0; i < this.state.skill4.length; i++){
                    if(this.state.skill4[i] === value){
                        copy.splice(i,1);
                    }
                }
                this.setState(() => ({
                    skill4 : copy
                }))
            }
    }

    handleSkill5(event) {
        let target = event.target;
        let value = target.name;
        let copy = [...this.state.skill5]
        let valueList = [...copy, value]
            this.setState(() => ({
                skill5 : valueList
            }))

            if (event.target.checked === false){
                for(let i = 0; i < this.state.skill5.length; i++){
                    if(this.state.skill5[i] === value){
                        copy.splice(i,1);
                    }
                }
                this.setState(() => ({
                    skill5 : copy
                }))
            }
    }

    handleFilter(event){
        let filter = event.target.value;
        let copyfilter = [...this.state.listfinal]
        let filterArray = []
        this.setState(() => ({
            filter: filter
        }))

        if(copyfilter.length >= 0){
            for(let i=0; i < copyfilter.length;i++){
                if(copyfilter[i][1] === filter || copyfilter[i][2] === filter){
                    filterArray.push(copyfilter[i])
                }
            }
            if(filterArray.length > 0){
                this.setState(() => ({
                    filteredlist: filterArray
                }))
            }
            else{
                this.setState(() => ({
                    filteredlist: [["None","None","None"]]
                }))
            }
        }

    }
    

    handleSubmit(event){
        this.setState(()=> ({
            filteredlist: []
        }))

        const S1 = (skillnumber, index) => {
            const value = skillnumber;
            let acc = [];
            let cd = [];
            let rec = []; 
            let checkacc = false;
            let checkcd = false;
            let checkrec = false;
    
            
    
            for (let i = 0; i < value.length; i++){
                if (value[i] === "accuracy") {
                    acc = this.props.data[index].accuracy;
                    checkacc = true;
                }
                if (value[i] === "critd") {
                    cd = this.props.data[index].critd;
                    checkcd = true;
                }
                if (value[i] === "recovery") {
                    rec = this.props.data[index].recovery;
                    checkrec = true;
                }
            }
    
            let info = [...acc, ...cd, ...rec]
            let result = []
            let final = []


                   
            const arrout = info
            const accout = acc
            const cdout = cd
            const recout = rec


            //Makes array into a Set
            const subarr = []
            const superarr =[]

            if (checkacc === true) {
                if (final.length > 0){ //if final is populated populate subarr if not populate final
                    if (subarr.length > 0){ // if subarr is populate if not ...
                        //populate super array
                        for (let i = 0; i <= (subarr.length - 1); i++){
                            console.log(subarr[i])
                            if (accout.includes(subarr[i])){
                                superarr.push(subarr[i])
                            }
                            else {
                                result.push(subarr[i])
                            }
                        }
                    }
                    else{
                        for (let i = 0; i <= (final.length - 1); i++){
                            console.log(final[i])
                            if (accout.includes(final[i])){
                                subarr.push(final[i])
                            }
                            else {
                                result.push(final[i])
                            }
                        }
                    }
                }
                else{
                    for (let i = 0; i <= (arrout.length - 1); i++){
                        console.log(arrout[i])
                        if (accout.includes(arrout[i])){
                            final.push(arrout[i])
                        }
                        else {
                            result.push(arrout[i])
                        }
                    }
                }
            }
            if (checkcd === true) {
                if (final.length > 0){ //if final is populated populate subarr if not populate final
                    if (subarr.length > 0){ // if subarr is populate if not ...
                        //populate super array
                        for (let i = 0; i <= (subarr.length - 1); i++){
                            console.log(subarr[i])
                            if (cdout.includes(subarr[i])){
                                superarr.push(subarr[i])
                            }
                            else {
                                result.push(subarr[i])
                            }
                        }
                    }
                    else{
                        for (let i = 0; i <= (final.length - 1); i++){
                            console.log(final[i])
                            if (cdout.includes(final[i])){
                                subarr.push(final[i])
                            }
                            else {
                                result.push(final[i])
                            }
                        }
                    }
                }
                else{
                    for (let i = 0; i <= (arrout.length - 1); i++){
                        console.log(arrout[i])
                        if (cdout.includes(arrout[i])){
                            final.push(arrout[i])
                        }
                        else {
                            result.push(arrout[i])
                        }
                    }
                }
            }
            if (checkrec === true) {
                if (final.length > 0){ //if final is populated populate subarr if not populate final
                    if (subarr.length > 0){ // if subarr is populate if not ...
                        //populate super array
                        for (let i = 0; i <= (subarr.length - 1); i++){
                            console.log(subarr[i])
                            if (recout.includes(subarr[i])){
                                superarr.push(subarr[i])
                            }
                            else {
                                result.push(subarr[i])
                            }
                        }
                    }
                    else{
                        for (let i = 0; i <= (final.length - 1); i++){
                            console.log(final[i])
                            if (recout.includes(final[i])){
                                subarr.push(final[i])
                            }
                            else {
                                result.push(final[i])
                            }
                        }
                    }
                }
                else{
                    for (let i = 0; i <= (arrout.length - 1); i++){
                        console.log(arrout[i])
                        if (recout.includes(arrout[i])){
                            final.push(arrout[i])
                        }
                        else {
                            result.push(arrout[i])
                        }
                    }
                }
            }

            if (final.length > 0){
                if (subarr.length > 0){
                    if (superarr.length > 0) {
                        var setarrout = new Set(superarr);
                    }
                    else {
                        var setarrout = new Set(subarr);
                    }
                }
                else {
                    var setarrout = new Set(final);
                }
            }
            else {
                var setarrout = []
            }
            
            console.log(setarrout)
            console.log(result)
            console.log(final)
            console.log(superarr)
            
           return setarrout;

        }


        const S5 = (skillnumber)=> {
            console.log(skillnumber)
            const value = skillnumber
            const index = 4
            let checkcounter = false;
            let checkatktogether = false;
            let checkbombd = false;
            let checklifedrain = false;
            let checkdefense = false;
            let checkattack = false;
            let checkspeed = false;
            let checkreflect = false;
            let count = []
            let atk2 = []
            let bomb = []
            let lifed = []
            let def = []
            let atk = []
            let spd = []
            let refl = []
            let points = 0

            const arrayFiller = (accout, arrout) => {
                //check if accout elements are in arrout, then put same elements in fillarr
               var fillarr = [];
                if (arrout.length > 0){
                    console.log(accout)
                    console.log(arrout)
                    console.log(accout[0])
                    for (let i = 0; i < accout.length; i++){
                        console.log(accout[i])
                        console.log(i)
                        if (arrout.includes(accout[i])){
                            fillarr.push(accout[i])
                        }
                    }
                    console.log(fillarr)
                    return fillarr;
                }
                else {
                    console.log(fillarr)
                    return fillarr;
                    
                }
            }

            for (let i = 0; i < value.length; i++){
                if (value[i] === "counter") {
                    count = this.props.data[index].counter;
                    checkcounter = true;
                    points += 1;
                }
                if (value[i] === "atktogether") {
                    atk2 = this.props.data[index].atktogether;
                    checkatktogether = true;
                    points += 1;
                }
                if (value[i] === "bombd") {
                    bomb = this.props.data[index].bombd;
                    checkbombd = true;
                    points += 1;
                }
                if (value[i] === "lifedrain") {
                    lifed = this.props.data[index].lifedrain;
                    checklifedrain = true;
                    points += 1;
                }
                if (value[i] === "defense") {
                    def = this.props.data[index].defense;
                    checkdefense = true;
                    points += 1;
                }
                if (value[i] === "attack") {
                    atk = this.props.data[index].attack;
                    checkattack = true;
                    points += 1;
                }
                if (value[i] === "speed") {
                    spd = this.props.data[index].speed;
                    checkspeed = true;
                    points += 1;
                }
                if (value[i] === "reflect") {
                    refl = this.props.data[index].reflect;
                    checkreflect = true;
                    points += 1;
                }
            }


            const generalarr = [...count,...atk2,...bomb,...lifed,...def,...atk,...spd,...refl]

            var megaarr = [...generalarr]
            console.log(megaarr)
                if (checkcounter === true){
                    megaarr = arrayFiller(count,megaarr)
                    console.log(megaarr)
                }
                if (checkatktogether === true){
                    megaarr = arrayFiller(atk2,megaarr)
                    console.log(megaarr)
                }
                if (checkbombd === true){
                    megaarr = arrayFiller(bomb,megaarr)
                    console.log(megaarr)
                }
                if (checklifedrain === true){
                    megaarr = arrayFiller(lifed,megaarr)
                    console.log(megaarr)
                }
                if (checkdefense === true){
                    megaarr = arrayFiller(def,megaarr)
                    console.log(megaarr)
                }
                if (checkattack === true){
                    megaarr = arrayFiller(atk,megaarr)
                    console.log(megaarr)
                }
                if (checkspeed === true){
                    megaarr = arrayFiller(spd,megaarr)
                    console.log(megaarr)
                }
                if (checkreflect === true){
                    megaarr = arrayFiller(refl,megaarr)
                    console.log(megaarr)
                }

            console.log("THIS IS GENERAL ARRAY")
            console.log(megaarr)
            return megaarr

        }


        // STEP 2 Function ____________________________________________________________________


        const S2 = (S1, S2, S3, S4,S5) => {
            let acc = S1;
            let cd = S2;
            let rec = S3;
            let sk4 = S4;
            let sk5 = S5; 
            let checkacc = false;
            let checkcd = false;
            let checkrec = false;
            let checkS4 = false;
            let checkS5 = false;

                   
            const fusionskills = [...acc, ...cd, ...rec, ...sk4, ...sk5]
            var setarr = new Set(fusionskills);
            const arrout = [...setarr]
            const accout = [...acc]
            const cdout = [...cd]
            const recout = [...rec]
            const sk4out = [...sk4]
            const sk5out = [...sk5]
            
            console.log(arrout)
            console.log(accout)
            console.log(cdout)
            console.log(recout)
            console.log(sk4out)
            console.log(sk5out)

            if (accout.length > 0){
                checkacc = true;
            }
            if (cdout.length > 0){
                checkcd = true;
            }
            if (recout.length > 0){
                checkrec = true;
            }
            if (sk4out.length > 0){
                checkS4 = true;
            }
            if (sk5out.length > 0){
                checkS5 = true;
            }

        //----------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------

            const arrayFiller = (accout, arrout) => {
                //check if accout elements are in arrout, then put same elements in fillarr
               var fillarr = [];
                if (arrout.length > 0){
                    console.log(accout)
                    console.log(arrout)
                    console.log(accout[0])
                    for (let i = 0; i < accout.length; i++){
                        console.log(accout[i])
                        console.log(i)
                        if (arrout.includes(accout[i])){
                            fillarr.push(accout[i])
                        }
                    }
                    console.log(fillarr)
                    return fillarr;
                }
                else {
                    console.log(fillarr)
                    return fillarr;
                    
                }
            }
        //-------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------
            //Makes array into a Set
            let arrlinup = []
            if (checkacc == true){
                arrlinup.push("accout")
            }
            if (checkcd == true){
                arrlinup.push("cdout")
            }
            if (checkrec == true){
                arrlinup.push("recout")
            }
            if (checkS4 == true){
                arrlinup.push("sk4out")
            }
            if (checkS5 == true){
                arrlinup.push("sk5out")
            }

            console.log(arrlinup)  
            
            var megaarr = arrout

            for(let j = 0; j < arrlinup.length;j++) { //Put steps in an array of arrays
                
                if (arrlinup[j] === "accout"){
                    megaarr = arrayFiller(accout,megaarr)
                    console.log(megaarr)
                }
                if (arrlinup[j] === "cdout"){
                    megaarr = arrayFiller(cdout,megaarr)
                    console.log(megaarr)
                }
                if (arrlinup[j] === "recout"){
                    megaarr = arrayFiller(recout,megaarr)
                    console.log(megaarr)
                }
                if (arrlinup[j] === "sk4out"){
                    megaarr = arrayFiller(sk4out,megaarr)
                    console.log(megaarr)
                }
                if (arrlinup[j] === "sk5out"){
                    megaarr = arrayFiller(sk5out,megaarr)
                    console.log(megaarr)
                }
                console.log(megaarr)
            }
            console.log("THIS IS THE ARRAY")
            console.log(megaarr)
         
            var setarrout = megaarr
       
            
            console.log(setarrout)
            
           return setarrout;
        }

        const typeFinder = (arr) => {
            const types = arr.map((x)=>{
               let category = this.state.list2[x]
               let fusion = [x,...category]
                return fusion;
            })
            return types;
   }


        const S1mons = S1(this.state.skill1, 0)
        const S2mons = S1(this.state.skill2, 1)
        const S3mons = S1(this.state.skill3, 2)
        const S4mons = S1(this.state.skill4, 3)
        const S5mons = S5(this.state.skill5)

        

       const fuse = [...S1mons, ...S2mons, ...S3mons, ...S4mons,...S5mons]
       //console.log(fuse)

       const finalArray = [...S2(S1mons,S2mons,S3mons,S4mons,S5mons)]


        const finalTypes = typeFinder(finalArray);

       //Run S1 with a JSON Object containing all of the arrays from all skills. 

        this.setState(() => ({
            list3 : fuse,
            listfinal : finalTypes,
        }))


  

        event.preventDefault();
    }


    render() {
        return(       
         <div className="searcher">
             <div className="form">
             <form onSubmit={this.handleSubmit}>
                 <h2>SKILL 1</h2>
                <input type="checkbox" onChange={this.handleSkill1} value="accuracy" name="accuracy"></input>
                <label>Accuracy</label>
                <input type="checkbox" onChange={this.handleSkill1} value="critd" name="critd"></input>
                <label>Crit Damage</label>
                <input type="checkbox" onChange={this.handleSkill1} value="recovery" name="recovery"></input>
                <label>Recovery</label>



                <h2>SKILL 2</h2>
                <input type="checkbox" onChange={this.handleSkill2} value="accuracy" name="accuracy"></input>
                <label>Accuracy</label>
                <input type="checkbox" onChange={this.handleSkill2} value="critd" name="critd"></input>
                <label>Crit Damage</label>
                <input type="checkbox" onChange={this.handleSkill2} value="recovery" name="recovery"></input>
                <label>Recovery</label>


                <h2>SKILL 3</h2>
                <input type="checkbox" onChange={this.handleSkill3} value="accuracy" name="accuracy"></input>
                <label>Accuracy</label>
                <input type="checkbox" onChange={this.handleSkill3} value="critd" name="critd"></input>
                <label>Crit Damage</label>
                <input type="checkbox" onChange={this.handleSkill3} value="recovery" name="recovery"></input>
                <label>Recovery</label>


                <h2>SKILL 4</h2>
                <input type="checkbox" onChange={this.handleSkill4} value="accuracy" name="accuracy"></input>
                <label>Accuracy</label>
                <input type="checkbox" onChange={this.handleSkill4} value="critd" name="critd"></input>
                <label>Crit Damage</label>
                <input type="checkbox" onChange={this.handleSkill4} value="recovery" name="recovery"></input>
                <label>Recovery</label>


                <h2>GENERAL EFFECT</h2>
                <input type="checkbox" onChange={this.handleSkill5} value="counterattack" name="counter"></input>
                <label>CounterAttack</label>
                <input type="checkbox" onChange={this.handleSkill5} value="attackingtogether" name="atktogether"></input>
                <label>Attacking Together</label>
                <input type="checkbox" onChange={this.handleSkill5} value="bombdamage" name="bombd"></input>
                <label>Bomb Damage</label>
                <input type="checkbox" onChange={this.handleSkill5} value="lifedrain" name="lifedrain"></input>
                <label>Life Drain</label>
                <input type="checkbox" onChange={this.handleSkill5} value="defenseeffect" name="defense"></input>
                <label>Defense Effect+</label>
                <input type="checkbox" onChange={this.handleSkill5} value="attackeffect" name="attack"></input>
                <label>Attack Effect+</label>
                <input type="checkbox" onChange={this.handleSkill5} value="speedeffect" name="speed"></input>
                <label>Speed Effect+</label>
                <input type="checkbox" onChange={this.handleSkill5} value="reflect" name="reflect"></input>
                <label>Reflect</label>

                <br></br>

                <input className= "button" type="submit" value="Find Monsters!" ></input>

             </form>

             <span className="spanEstate">
             <label>Step 1: Fill out Form</label>
             <br></br>
             <label>Step 2: Click Find Monsters</label>
             <br></br>
             <label>Step 3: Choose Filters</label>
             <br></br>
             </span>
             
             <h2>FILTERS</h2>
             <label>Element: </label>
            <button className="buttonFire" onClick={this.handleFilter} value="Fire">Fire</button>
            <button className="buttonWater" onClick={this.handleFilter} value="Water">Water</button>
            <button className="buttonWind" onClick={this.handleFilter} value="Wind">Wind</button>
            <button className="buttonLight" onClick={this.handleFilter} value="Light">Light</button>
            <button className="buttonDark" onClick={this.handleFilter} value="Dark">Dark</button>

            <br></br>
            <label>Type: </label>
            <button className="buttonType" onClick={this.handleFilter} value="Attack">Attack</button>
            <button className="buttonType" onClick={this.handleFilter} value="Defense">Defense</button>
            <button className="buttonType" onClick={this.handleFilter} value="HP">HP</button>
            <button className="buttonType" onClick={this.handleFilter} value="Support">Support</button>
            
            <ul>

            {this.state.filteredlist.length > 0
            ?
            this.state.filteredlist.map((x) => {
                if (x[1] === "Fire"){
                    return(<li className="fire"> {x[0]} ----- {x[1]}/{x[2]}</li>)
                }
                else if (x[1] === "Water"){
                    return(<li className="water"> {x[0]} ----- {x[1]}/{x[2]}</li>)
                }
                else if (x[1] === "Wind"){
                    return(<li className="wind"> {x[0]} ----- {x[1]}/{x[2]}</li>)
                }
                else if (x[1] === "Light"){
                    return(<li className="light"> {x[0]} ----- {x[1]}/{x[2]}</li>)
                }
                else if (x[1] === "Dark"){
                    return(<li className="dark"> {x[0]} ----- {x[1]}/{x[2]}</li>)
                }
                else{
                    return(<li> {x[0]} ----- {x[1]}/{x[2]}</li>)
                }
            })
            
            :
                        this.state.listfinal.map((x) => {
                            if (x[1] === "Fire"){
                                return(<li className="fire"> {x[0]} ----- {x[1]}/{x[2]}</li>)
                            }
                            else if (x[1] === "Water"){
                                return(<li className="water"> {x[0]} ----- {x[1]}/{x[2]}</li>)
                            }
                            else if (x[1] === "Wind"){
                                return(<li className="wind"> {x[0]} ----- {x[1]}/{x[2]}</li>)
                            }
                            else if (x[1] === "Light"){
                                return(<li className="light"> {x[0]} ----- {x[1]}/{x[2]}</li>)
                            }
                            else if (x[1] === "Dark"){
                                return(<li className="dark"> {x[0]} ----- {x[1]}/{x[2]}</li>)
                            }
                            else{
                                return(<li> {x[0]} ----- {x[1]}/{x[2]}</li>)
                            }
                        })
            }
            
            


            </ul>

            </div>
        </div>
        )
    }
}

export default Searcher;
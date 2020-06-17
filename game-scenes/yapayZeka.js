//<Text style={styles.text}>{this.state.game[0][0]}</Text>
import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, TouchableHighlight, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { tsMethodSignature } from '@babel/types';
export default class SinglePlayerTTT extends Component {
  constructor(props) {
    super(props);


    this.state = {
      game:[
        ["","",""],
        ["","",""],
        ["","",""],
      ],
      WhichPlayer:"X"

    };
this.onPressTile=this.onPressTile.bind(this)
  }
  componentDidMount(){
setInterval(()=>{console.warn(this.state.WhichPlayer)+"game state : " + this.state.games},1000)


  }
 
  onPressTile(x,y){
    // its client
    

    this.state.WhichPlayer==="X" ? this.setState({WhichPlayer:"O"}):this.setState({WhichPlayer:"X"})
    this.array=this.state.game.slice()
   this.array[x][y]="X"
  this.setState({
    game:this.array
  })
 
//computer
setTimeout(()=>{

  if(this.state.WhichPlayer==="O"){
    
    if(this.state.game[0][1]===""){
      import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, ScrollView, TouchableHighlight, } from 'react-native';
import  Icon   from 'react-native-vector-icons/FontAwesome';
export default class MultiplayerTTT extends Component {
  constructor(props) {
    super(props);
  
  
    this.state = {
    
      game:[0,0,0,
            0,0,0,
            0,0,0 ],
      yuva:"",
      WhichPlayer:1,
      color:"gray",
      gameover:0,
      isDraw:0
    };
  
this.onPressTile=this.onPressTile.bind(this)
  this.whoWinnerorGameOver=this.whoWinnerorGameOver.bind(this)
  this.changeGameover=this.changeGameover.bind(this)
  
  this.timer=setInterval(this.onPressTile,100)
 console.warn(this.state.WhichPlayer)
  
  }
changeGameover(){
  this.setState({
    gameover:0
  })
  
}

onPressTile(x){
    if(this.state.game[0]+this.state.game[1]+this.state.game[2]!==3 &&
        this.state.game[3]+this.state.game[4]+this.state.game[5]!==-3 &&
        this.state.game[6]+this.state.game[7]+this.state.game[8]!==-3  &&
        this.state.game[0]+this.state.game[3]+this.state.game[6]!==-3  &&
        this.state.game[1]+this.state.game[4]+this.state.game[7]!==-3  &&
        this.state.game[2]+this.state.game[5]+this.state.game[8]!==-3  &&
        this.state.game[0]+this.state.game[4]+this.state.game[8]!==-3  &&
        this.state.game[2]+this.state.game[4]+this.state.game[6]!==-3 && 
        this.state.game[0]+this.state.game[1]+this.state.game[2]!==3 &&
        this.state.game[3]+this.state.game[4]+this.state.game[5]!==3 &&
        this.state.game[6]+this.state.game[7]+this.state.game[8]!==3  &&
        this.state.game[0]+this.state.game[3]+this.state.game[6]!==3  &&
        this.state.game[1]+this.state.game[4]+this.state.game[7]!==3  &&
        this.state.game[2]+this.state.game[5]+this.state.game[8]!==3  &&
        this.state.game[0]+this.state.game[4]+this.state.game[8]!==3 &&
        this.state.game[0]!==0&&
        this.state.game[1]!==0&&
        this.state.game[2]!==0&&
        this.state.game[3]!==0&&
        this.state.game[4]!==0&&
        this.state.game[5]!==0&&
        this.state.game[6]!==0&&
        this.state.game[7]!==0&&
        this.state.game[8]!==0){
            this.setState({
                isDraw:1
            })
        }
    else {this.setState({
        isDraw:0
    })}
    
  if(this.state.gameover===1 ){
setTimeout(this.changeGameover,100)
    this.setState({
      game:[0,0,0,
        0,0,0,
        0,0,0],
       WhichPlayer:1
    })
  }
  var deger =this.state.game[x];
  if(deger!=0|| this.state.game[0]+this.state.game[1]+this.state.game[2]===-3 ||
    this.state.game[3]+this.state.game[4]+this.state.game[5]===-3 ||
    this.state.game[6]+this.state.game[7]+this.state.game[8]===-3  ||
    this.state.game[0]+this.state.game[3]+this.state.game[6]===-3  ||
    this.state.game[1]+this.state.game[4]+this.state.game[7]===-3  ||
    this.state.game[2]+this.state.game[5]+this.state.game[8]===-3  ||
    this.state.game[0]+this.state.game[4]+this.state.game[8]===-3  ||
    this.state.game[2]+this.state.game[4]+this.state.game[6]===-3||
    this.state.game[0]+this.state.game[1]+this.state.game[2]===3 ||
  this.state.game[3]+this.state.game[4]+this.state.game[5]===3 ||
  this.state.game[6]+this.state.game[7]+this.state.game[8]===3  ||
  this.state.game[0]+this.state.game[3]+this.state.game[6]===3  ||
  this.state.game[1]+this.state.game[4]+this.state.game[7]===3  ||
  this.state.game[2]+this.state.game[5]+this.state.game[8]===3  ||
  this.state.game[0]+this.state.game[4]+this.state.game[8]===3  ||
  this.state.game[2]+this.state.game[4]+this.state.game[6]===3
    )
    {
      this.setState({color:"white"})
    return 
  }
 
 this.state.WhichPlayer===1 ? this.setState({WhichPlayer:-1}):this.setState({WhichPlayer:1})
  
  arr=this.state.game.slice()
  arr[x]=this.state.WhichPlayer
this.setState({
  game:arr
})
this.setState({
  turn:x
})

}
  renderX(x){

if (this.state.game[x]===1 ){
 return <Icon name="close" size={50} color="#4EA964"/>
}
else if(this.state.game[x]===-1){
 
  return <Icon name="circle-o" size={50} color="red"/>
}

  
  }
  renderPlayerTurn(){
    if(this.state.game[this.state.turn]===1 && this.state.game[0]+this.state.game[1]+this.state.game[2]!==3 &&
      this.state.game[3]+this.state.game[4]+this.state.game[5]!==3 &&
      this.state.game[6]+this.state.game[7]+this.state.game[8]!==3  &&
      this.state.game[0]+this.state.game[3]+this.state.game[6]!==3  &&
      this.state.game[1]+this.state.game[4]+this.state.game[7]!==3  &&
      this.state.game[2]+this.state.game[5]+this.state.game[8]!==3  &&
      this.state.game[0]+this.state.game[4]+this.state.game[8]!==3  &&
      this.state.game[2]+this.state.game[4]+this.state.game[6]!==3 && this.state.game[0]+this.state.game[1]+this.state.game[2]!==3 &&
      this.state.game[3]+this.state.game[4]+this.state.game[5]!==-3 &&
      this.state.game[6]+this.state.game[7]+this.state.game[8]!==-3  &&
      this.state.game[0]+this.state.game[3]+this.state.game[6]!==-3  &&
      this.state.game[1]+this.state.game[4]+this.state.game[7]!==-3  &&
      this.state.game[2]+this.state.game[5]+this.state.game[8]!==-3  &&
      this.state.game[0]+this.state.game[4]+this.state.game[8]!==-3  &&
      this.state.game[2]+this.state.game[4]+this.state.game[6]!==-3&&this.state.isDraw===0 ){
      return <Text style={{fontSize:20}} >Turn is <Icon name="circle-o" size={20} color="red"/> </Text>
    }
    else if(this.state.game[this.state.turn]===-1 && this.state.game[0]+this.state.game[1]+this.state.game[2]!==3 &&
      this.state.game[3]+this.state.game[4]+this.state.game[5]!==-3 &&
      this.state.game[6]+this.state.game[7]+this.state.game[8]!==-3  &&
      this.state.game[0]+this.state.game[3]+this.state.game[6]!==-3  &&
      this.state.game[1]+this.state.game[4]+this.state.game[7]!==-3  &&
      this.state.game[2]+this.state.game[5]+this.state.game[8]!==-3  &&
      this.state.game[0]+this.state.game[4]+this.state.game[8]!==-3  &&
      this.state.game[2]+this.state.game[4]+this.state.game[6]!==-3 && this.state.game[0]+this.state.game[1]+this.state.game[2]!==3 &&
      this.state.game[3]+this.state.game[4]+this.state.game[5]!==3 &&
      this.state.game[6]+this.state.game[7]+this.state.game[8]!==3  &&
      this.state.game[0]+this.state.game[3]+this.state.game[6]!==3  &&
      this.state.game[1]+this.state.game[4]+this.state.game[7]!==3  &&
      this.state.game[2]+this.state.game[5]+this.state.game[8]!==3  &&
      this.state.game[0]+this.state.game[4]+this.state.game[8]!==3 &&this.state.isDraw===0 ){

      return <Text style={{fontSize:20}}>Turn is <Icon name="close" size={23 } color="#4EA964"/> </Text>
      
    }
    else if(this.state.isDraw===1){
            return  <View/>
        }
  }
  whoWinnerorGameOver(){
if(this.state.game[0]+this.state.game[1]+this.state.game[2]===3 ||
  this.state.game[3]+this.state.game[4]+this.state.game[5]===3 ||
  this.state.game[6]+this.state.game[7]+this.state.game[8]===3  ||
  this.state.game[0]+this.state.game[3]+this.state.game[6]===3  ||
  this.state.game[1]+this.state.game[4]+this.state.game[7]===3  ||
  this.state.game[2]+this.state.game[5]+this.state.game[8]===3  ||
  this.state.game[0]+this.state.game[4]+this.state.game[8]===3  ||
  this.state.game[2]+this.state.game[4]+this.state.game[6]===3   ){
    
    return <Text style={{fontSize:30}}><Icon name="close" size={33 } color="#4EA964"/> is Winner!</Text>
    }
  
  else if(this.state.game[0]+this.state.game[1]+this.state.game[2]===-3 ||
    this.state.game[3]+this.state.game[4]+this.state.game[5]===-3 ||
    this.state.game[6]+this.state.game[7]+this.state.game[8]===-3  ||
    this.state.game[0]+this.state.game[3]+this.state.game[6]===-3  ||
    this.state.game[1]+this.state.game[4]+this.state.game[7]===-3  ||
    this.state.game[2]+this.state.game[5]+this.state.game[8]===-3  ||
    this.state.game[0]+this.state.game[4]+this.state.game[8]===-3  ||
    this.state.game[2]+this.state.game[4]+this.state.game[6]===-3){
      return <Text style={{fontSize:30}}><Icon name="circle-o" size={33 } color="red"/> is Winner!</Text>

    }
    else if(
        this.state.game[0]+this.state.game[1]+this.state.game[2]!==3 &&
        this.state.game[3]+this.state.game[4]+this.state.game[5]!==-3 &&
        this.state.game[6]+this.state.game[7]+this.state.game[8]!==-3  &&
        this.state.game[0]+this.state.game[3]+this.state.game[6]!==-3  &&
        this.state.game[1]+this.state.game[4]+this.state.game[7]!==-3  &&
        this.state.game[2]+this.state.game[5]+this.state.game[8]!==-3  &&
        this.state.game[0]+this.state.game[4]+this.state.game[8]!==-3  &&
        this.state.game[2]+this.state.game[4]+this.state.game[6]!==-3 && 
        this.state.game[0]+this.state.game[1]+this.state.game[2]!==3 &&
        this.state.game[3]+this.state.game[4]+this.state.game[5]!==3 &&
        this.state.game[6]+this.state.game[7]+this.state.game[8]!==3  &&
        this.state.game[0]+this.state.game[3]+this.state.game[6]!==3  &&
        this.state.game[1]+this.state.game[4]+this.state.game[7]!==3  &&
        this.state.game[2]+this.state.game[5]+this.state.game[8]!==3  &&
        this.state.game[0]+this.state.game[4]+this.state.game[8]!==3 &&
        this.state.game[0]!==0&&
        this.state.game[1]!==0&&
        this.state.game[2]!==0&&
        this.state.game[3]!==0&&
        this.state.game[4]!==0&&
        this.state.game[5]!==0&&
        this.state.game[6]!==0&&
        this.state.game[7]!==0&&
        this.state.game[8]!==0
        
        ){
      return <Text style={{fontSize:30}}>Match is draw</Text>

        }
  }

  render() {
    const hikayeUs = 25
    const hikayealt = 85
    const TableWidth = 2
    const TableHeight = 250 / 3
    const complike = "20%"
    const complike2 = "20%"
    const tableMedLine = '90%'

    return (

      <SafeAreaView >
        <View
          style={{ height: '100%', width: '100%', display: "flex", backgroundColor: "white" }}
        >
          <View

            style={styles.UstTrf}
          >
            <Text
              style={styles.baslik}
            >
              TIC TAC TOE
        </Text>
          </View>
          <View style={styles.separator}/>

        
          <View >
          </View>
              <View style={{justifyContent:"center",alignItems:"center",marginTop:5,height:85,width:"100%"}}>{this.renderPlayerTurn()}</View>
          <View style={{ marginTop: 25 }}>

            <View style={{ width: "80%", height: TableWidth, backgroundColor: "black", marginLeft: "10%" }}></View>

            <View style={styles.tictactoeSC}>


              <View style={{ width: complike, height: 75, borderLeftWidth: TableWidth, marginLeft: complike2 }}>
                <View style={styles.block}>
                  <TouchableHighlight style={{ height:50,width:50,borderRadius:50/2}} 
                  underlayColor={this.state.color} onPress={()=>this.onPressTile(0)}>
                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                    {this.renderX(0)}

                    </View>
                  </TouchableHighlight>
                </View>
              </View>
              <View style={styles.seconderBoxes}>
                <View style={styles.block}>
                <TouchableHighlight style={{ height:50,width:50,borderRadius:50/2}}underlayColor={this.state.color} onPress={()=>this.onPressTile(1)}>
                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
            {this.renderX(1)}
                   

                    </View>
                  </TouchableHighlight>
                </View>

              </View>
              <View style={styles.seconderBoxes}>
                <View style={styles.block}>
                <TouchableHighlight style={{ height:50,width:50,borderRadius:50/2}} underlayColor={this.state.color} onPress={()=>this.onPressTile(2)}>
                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
            {this.renderX(2)}
                    

                    </View>
                  </TouchableHighlight>
                </View>

              </View>
              <View style={styles.seconderBoxes}></View>

              <View style={styles.block}>
             
              </View>
            </View>

            <View style={styles.primerBoxes}></View>

            <View style={styles.tictactoeSC}>

              <View style={{ width: complike, height: 75, marginLeft: complike2, borderLeftWidth: TableWidth }}>
                <View style={styles.block}>
                <TouchableHighlight style={{ height:50,width:50,borderRadius:50/2}} underlayColor={this.state.color} onPress={()=>this.onPressTile(3)}>
                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
            {this.renderX(3)}
                    

                    </View>
                  </TouchableHighlight>
                </View>
              </View>
              <View style={styles.seconderBoxes}>
                <View style={styles.block}>
                <TouchableHighlight style={{ height:50,width:50,borderRadius:50/2}}  underlayColor={this.state.color} onPress={()=>this.onPressTile(4)}>
                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
            {this.renderX(4)}
                   

                    </View>
                  </TouchableHighlight>
                </View>

              </View>
              <View style={styles.seconderBoxes}>
                <View style={styles.block}>
                <TouchableHighlight style={{ height:50,width:50,borderRadius:50/2}} underlayColor={this.state.color} onPress={()=>this.onPressTile(5)}>
                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                    {this.renderX(5)}

                    </View>
                  </TouchableHighlight>
                </View>

              </View>
              <View style={styles.seconderBoxes}></View>

              <View style={styles.block}>
              
              </View>

            </View>
            <View style={styles.primerBoxes}></View>

            <View style={styles.tictactoeSC}>

              <View style={{ width: complike, height: 75, marginLeft: complike2, borderLeftWidth: TableWidth }}>
                <View style={styles.block}>
                <TouchableHighlight style={{ height:50,width:50,borderRadius:50/2}}  underlayColor={this.state.color} onPress={()=>this.onPressTile(6)}>
                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                    {this.renderX(6)}

                    </View>
                  </TouchableHighlight>
                </View>
              </View>
              <View style={styles.seconderBoxes}>
                <View style={styles.block}>
                <TouchableHighlight style={{ height:50,width:50,borderRadius:50/2}}  underlayColor={this.state.color} onPress={()=>this.onPressTile(7)}>
                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                    {this.renderX(7)}

                    </View>
                  </TouchableHighlight>
                </View>

              </View>
              <View style={styles.seconderBoxes}>
                <View style={styles.block}>
                <TouchableHighlight style={{ height:50,width:50,borderRadius:50/2}} underlayColor={this.state.color} onPress={()=>this.onPressTile(8)}>
                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                    {this.renderX(8)}

                    </View>
                  </TouchableHighlight>
                </View>

              </View>
              <View style={styles.seconderBoxes}></View>

              <View style={styles.block}>
              </View>

            </View>
            <View style={styles.primerBoxes}></View>
<View style={{justifyContent:"center",alignItems:"center",marginTop:5,height:85,width:"100%"}}>
<View >{this.whoWinnerorGameOver()}</View>
</View>

           
<View style={{ alignContent: "center", justifyContent: "center", alignItems: "center", marginTop: 5 }}>
            <TouchableHighlight
              underlayColor="gray"
              onPress={()=>{
                this.setState({
                  gameover:1
                })
              }}
              style={{
                width: 100,
                height: 25,
                borderRadius: 5,
              }}
            >
              <View style={styles.rect}>
                <Text style={{ fontSize: 13 }}>REPLAY</Text>

              </View>
            </TouchableHighlight>
          </View>


     </View>



        </View>
      </SafeAreaView>



    );

  }
}


const ballRadius = 20;
const hikayeUs = 25
const hikayealt = 85
const TableWidth = 2
const TableHeight = 250 / 3
const complike = "20%"
const complike2 = "20%"
const tableMedLine = '90%'
const styles = StyleSheet.create({
  tictactoeSC: {
    flexDirection: "row",
  },
  seconderBoxes: {
    width: complike, 
    height: 75, 
    borderLeftWidth: TableWidth 
  },
  rect: {

    width: 100,
    height: 25,
    borderRadius: 5,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderTopWidth: 0.5,
    borderRightWidth: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  ball: {
    marginTop: ballRadius,
    width: ballRadius,
    height: ballRadius,
    borderRadius: ballRadius / 2,
    backgroundColor: "black"
  },

  baslik: {
    fontSize: 18,
    fontWeight: '100',
    color: "black",
    fontFamily: "Roboto",

    textAlign: "center"
  },
  primerBoxes: {
    width: "80%",
    height: TableWidth, 
    backgroundColor: "black", 
    marginLeft: "10%",
    
  },
  block: {
    width: 75,
    height: 75,
    justifyContent:"center",
    alignItems:"center"

  },
  UstTrf: {

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
  },
  separator: {

    borderBottomColor: '#737373',
    borderStyle: "solid",
    borderBottomWidth: 0.5,
  },
});
this.array[0][1]="O"  
    this.setState({
      game:this.array
    })}
     
    
    
    
    else if(this.state.game[1][i]===""){this.array[1][i]="O"  
    this.setState({
      game:this.array
    })}
     
    else if(this.state.game[2][i]===""){this.array[2][i]="O"  
    this.setState({
      game:this.array
    })}
    
    }
  


},100)

  }
 

  render() {
    return(
<SafeAreaView>
  <View style={{justifyContent:"center",alignItems:"center",marginTop:150}}>
  <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
  <View><TouchableHighlight onPress={()=>this.onPressTile(0,0)} underlayColor="gray" ><View style={styles.box}><Text style={styles.text}>{this.state.game[0][0]}</Text></View></TouchableHighlight></View>
  <View><TouchableHighlight onPress={()=>this.onPressTile(0,1)} underlayColor="gray"><View style={styles.box}><Text style={styles.text}>{this.state.game[0][1]}</Text></View></TouchableHighlight></View>
    <View><TouchableHighlight onPress={()=>this.onPressTile(0,2)} underlayColor="gray"><View style={styles.box}><Text style={styles.text}>{this.state.game[0][2]}</Text></View></TouchableHighlight></View>

    </View>
    <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
    <View><TouchableHighlight onPress={()=>this.onPressTile(1,0)} underlayColor="gray"><View style={styles.box}><Text style={styles.text}>{this.state.game[1][0]}</Text></View></TouchableHighlight></View>
    <View><TouchableHighlight onPress={()=>this.onPressTile(1,1)} underlayColor="gray"><View style={styles.box}><Text style={styles.text}>{this.state.game[1][1]}</Text></View></TouchableHighlight></View>
    <View><TouchableHighlight onPress={()=>this.onPressTile(1,2)} underlayColor="gray"><View style={styles.box}><Text style={styles.text}>{this.state.game[1][2]}</Text></View></TouchableHighlight></View>

    </View>
    <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
    <View><TouchableHighlight onPress={()=>this.onPressTile(2,0)} underlayColor="gray"><View style={styles.box}><Text style={styles.text}>{this.state.game[2][0]}</Text></View></TouchableHighlight></View>
    <View><TouchableHighlight onPress={()=>this.onPressTile(2,1)} underlayColor="gray"><View style={styles.box}><Text style={styles.text}>{this.state.game[2][1]}</Text></View></TouchableHighlight></View>
    <View><TouchableHighlight onPress={()=>this.onPressTile(2,2)} underlayColor="gray"><View style={styles.box}><Text style={styles.text}>{this.state.game[2][2]}</Text></View></TouchableHighlight></View>


    </View>


  </View>











</SafeAreaView>


    );

  }
}


const ballRadius = 20;
const hikayeUs = 25
const hikayealt = 85
const TableWidth = 2
const TableHeight = 250 / 3
const complike = "20%"
const complike2 = "20%"
const tableMedLine = '90%'
const styles = StyleSheet.create({
  box:{
width:100,
height:100,
backgroundColor:"transparent",
borderWidth:1,
justifyContent: "center",
alignItems:"center"

  },
  text:{
fontSize:75

  },
  separator: {

    borderBottomColor: '#737373',
    borderStyle: "solid",
    borderBottomWidth: 0.5,
  },
});

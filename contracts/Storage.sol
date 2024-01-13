pragma solidity >=0.4.22 <0.7.0;


contract Storage {      
   string public name;      
   function setName(string memory _name) public {         
      name = _name;     
   }  
}

const { where } = require('sequelize')
const { order } = require('../models')
const { sequelize } = require('../models');

const createCustomer = async (req, res) => {
    try {
        const customer = await order.Create(req.body)
        res.status(200).json({meesage:"Created data sucessfully",data:customer})

    } catch (error) {
        res.status(400).json({meesage:"error to create a data",error:error.message})
    }

}




// Checking gitsf
// Sequelize Fn function
const functionhere =async(req,res)=>{
    try {
        const functiondec=await order.findAll({
            attributes:[
                [sequelize.fn('SUM',sequelize.literal('"discountApplied"*"totalAmount"')),'Totalvalue']
            ]
        })
        res.status(200).json({message:"data get sucessfully",data:functiondec})
    } catch (error) {
        res.status(500).json({message:"error to get the data",error:error.message})
    }
}

//sequelize literal
const orderfn = async (req, res) => {
    try {
        const orderfnhere = await order.findAll({
            attributes: [
                [sequelize.literal('"totalAmount" / "discountApplied"'), 'FinalPrice']  
            ] 
        });
        res.status(200).json({ message: "Data retrieved successfully", data: orderfnhere });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error retrieving the data", error: error.message });
    }
};


const readCustomer =async(req,res)=>{
    try {
        const readCustomer=await order.findAll();
        res.status(200).json({message:"get the data sucessfully",data:readCustomer})
    } catch (error) {
        res.status(400).json({message:"error to get the data",error:error.message})
    }
}

const deleteCustomer =async(req,res)=>{
        try {
            const {id}=req.body;
            const deleteCustomer=await order.destroy({where:{id}})
            res.status(200).json({message:"delete the customer data sucessfully ",data:deleteCustomer})

        } catch (error) {
            res.status(400).json({message:"error to delete the customer data",error:error.message})
        }
}
const updateCustomer =async(req,res)=>{
    try {
        const{id,...rowsupdate}=req.body;
        const deletecustomer=await order.update(rowsupdate,{where:{id}})
        if (deletecustomer[0]>0) {
            res.status(200).json({message:"updated the data sucessfully"})
        } else {
            res.status(404).json({message:"No data found"})
        }
    } catch (error) {
        res.status(400).json({message:'error to update the customer data',error:error.message})
        
    }
    
}

module.exports={updateCustomer,deleteCustomer,readCustomer,createCustomer,orderfn,functionhere}
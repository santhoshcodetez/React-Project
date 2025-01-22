const { where } = require('sequelize')
const { employees } = require('../models')

// CRUD Operation

const createCustomer = async (req, res) => {
    try {
        const customer = await employees.Create(req.body)
        res.status(200).json({meesage:"Created data sucessfully",data:customer})

    } catch (error) {
        res.status(400).json({meesage:"error to create a data",error:error.message})
    }

}

const readCustomer=async(req,res)=>{
    try {
        const readCustomer=await employees.findAll();
        res.status(200).json({message:"get the data sucessfully",data:readCustomer})
    } catch (error) {
        res.status(400).json({message:"error to get the data",error:error.message})
    }
}

const deleteCustomer=async(req,res)=>{
        try {
            const {id}=req.body;
            const deleteCustomer=await Books.destroy({where:{id}})
            res.status(200).json({message:"delete the customer data sucessfully ",data:deleteCustomer})
        } catch (error) {
            res.status(400).json({message:"error to delete the customer data",error:error.message})
        }
}
const updateCustomer=async(req,res)=>{
    try {
        const{id,...rowsupdate}=req.body;
        const deletecustomer=await employees.update(rowsupdate,{where:{id}})
        if (deletecustomer[0]>0) {
            res.status(200).json({message:"updated the data sucessfully"})
        } else {
            res.status(404).json({message:"No data found"})
        }
    } catch (error) {
        res.status(400).json({message:'error to update the customer data',error:error.message})
        
    }
}

module.exports={updateCustomer,deleteCustomer,readCustomer,createCustomer}
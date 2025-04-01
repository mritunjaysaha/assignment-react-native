// Function to Add a New Business
export async function addBusiness(db, name) {
  await db.businesses.insert({id: Date.now().toString(), name});
}

// Function to Get All Businesses
export async function getBusinesses(db) {
  return await db.businesses.find().exec();
}

// Function to Delete a Business
export async function deleteBusiness(db, id) {
  const business = await db.businesses.findOne({selector: {id}}).exec();
  if (business) {
    await business.remove();
  }
}

function GhettoDB() {
  return {
    users: {

    },
    bumps: [],
  }
}

// Add a new user to the database, keyed on their mobile number
GhettoDB.prototype.addUser = function(user_mobile_number) {
  self.users['user_mobile_number'] = user_mobile_number;
}

// Add a new bump pair to the database and return the ID of the new bump
GhettoDB.prototype.addBump = function(user_1_mobile_number, user_2_mobile_number) {
  self.bumps.push({
    user_1_mobile_number: null,
    user_2_mobile_number: null,
  })
  return 
}

// Basically swipe left or swipe right on the other person. down_to_bump should be true/false
GhettoDB.prototype.swipeOnBump = function(user_mobile_number, bump_id, down_to_bump) {
  self.bumps[bump_id][user_mobile_number] = down_to_bump;
}

GhettoDB.prototype.getBump = function(bump_id) {
  return self.bumps[bump_id];
}
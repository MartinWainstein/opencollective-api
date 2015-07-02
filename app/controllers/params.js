module.exports = function(app) {

  /**
   * Internal Dependencies.
   */
  var models = app.set('models');
  var User = models.User;
  var Group = models.Group;
  var Transaction = models.Transaction;
  var Paykey = models.Paykey;
  var errors = app.errors;

  /**
   * Public methods.
   */
  return {

    /**
     * Userid.
     */
    userid: function(req, res, next, userid) {
      User
        .find(parseInt(userid))
        .then(function(user) {
          if (!user) {
            return next(new errors.NotFound('User \'' + userid + '\' not found'));
          } else {
            req.user = user;
            next();
          }
        })
        .catch(next);
    },

    /**
     * Groupid.
     */
    groupid: function(req, res, next, groupid) {
      Group
        .find(parseInt(groupid))
        .then(function(group) {
          if (!group) {
            return next(new errors.NotFound('Group \'' + groupid + '\' not found'));
          } else {
            req.group = group;
            next();
          }
        })
        .catch(next);
    },

    /**
     * Transactionid.
     */
    transactionid: function(req, res, next, transactionid) {
      Transaction
        .find(parseInt(transactionid))
        .then(function(transaction) {
          if (!transaction) {
            return next(new errors.NotFound('Transaction \'' + transactionid + '\' not found'));
          } else {
            req.transaction = transaction;
            next();
          }
        })
        .catch(next);
    },

    /**
     * Paykey.
     */
    paykey: function(req, res, next, paykey) {
      Paykey
        .find({
          where: {
            paykey: paykey
          }
        })
        .then(function(pk) {
          if (!pk) {
            return next(new errors.NotFound('Paykey \'' + paykey + '\' not found'));
          } else {
            req.paykey = pk;
            next();
          }
        })
        .catch(next);
    }

  }

};

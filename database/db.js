var init = function(db){

	db.schema.createTableIfNotExists('tasks', function (table) {
		table.increments()
		table.string('taskid')
		table.string('storeURL')
    table.string('keywords')
    table.string('style')
    table.string('size')
    table.string('checkoutProfile')
	}).then(() => {})

}

module.exports = init

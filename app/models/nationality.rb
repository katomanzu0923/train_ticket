class Nationality < ActiveHash::Base
	self.data = [
		{ id: 1, name: '--' },
		{ id: 2, name: 'japan'},
		{ id: 3, name: 'chaina'},
		{ id: 4, name: 'other'}
	]
end

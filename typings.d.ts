type Feature = {
	id: number
	title: string
	description: string
	icon: string
}

type Project = {
	title: string
	details: string
	image: string
}

type Design = {
	name: string
	description: string
	projects: Project[]
}

type LocationData = {
	illustrationImage: string
	image: string
	location: string
	office: {
		name: string
		street: string
		city: string
	}
	contact: {
		phone: string
		mail: string
	}
}

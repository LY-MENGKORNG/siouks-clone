import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

export default async function Projects() {
	const limit = 5
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/users?_limit=' + limit,
		{
			cache: 'no-store',
		}
	)
	const users = await response.json()

	const handleSubmit = async (formData: FormData) => {
		'use server'
		console.log(formData.get('name'))
	}
	return (
		<div className="w-full h-full">
			<form action={handleSubmit}>
				<Input name="name" />
			</form>
			<ul>
				{users.map((user) => (
					<Card
						className="p-1 mt-1"
						key={user.id}>
						{JSON.stringify(user)}
					</Card>
				))}
			</ul>
		</div>
	)
}

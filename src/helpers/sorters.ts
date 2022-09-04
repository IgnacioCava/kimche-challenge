import { Sorter } from './interfaces'

export const sortData: Sorter = ({ data, sort }) => {
	// La única forma en que el tipo de sort empiece con '-' es si el sort anterior era la versión no invertida (o descendiente).
	// Esto nos permite devolver el mismo array pero invertido, sin necesidad de aplicar ninguna lógica adicional.
	if (sort.charAt(0) === '-') return data.reverse()
	return data.sort((a, b) =>
		sort.includes('name')
			? a.name.localeCompare(b.name)
			: b.countries.length - a.countries.length <= 0
			? -1
			: 1
	)
}

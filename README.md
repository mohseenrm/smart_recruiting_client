# smart recruiting client

##resume.json format

```
{
	"title": "candidate_name",
	"education": [
		{
			"institute_name": "xyz university",
			"location": "tempe",
			"degree": "masters",
			"gpa": "3.4",
			"duration": "1"
		},
		{
			"institute_name": "xyz university",
			"location": "pune",
			"degree": "bachelors",
			"gpa": "3.9",
			"duration": "4"
		}
	],
	"experience": [
		{
			"company_1": "2",
			"company_2": "0.5"
		}
	],
	"skills": ["js", "python 2", "node", "haskell"],
	"projects": [
		{
			"project_title": "project name",
			"link": "https://abc.com",
			"description": "whatever description candidate mentions",
			"skills": ["js", "pwa", "node"]
		}
	],
	"achievements": "sample that the candidate provides",
	"certification": ["certification_1", "certification_2"]
}
```
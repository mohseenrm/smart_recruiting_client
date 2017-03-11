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
			"company_1": {
				"position": "junior dev",
				"experience": "2"
			},
			"company_2": {
				"position": "intern",
				"experience": "0.5"
			}
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

##recruiter.json format

{  
    "jobtitle":"Software Engineer - Vision ",
    "company":"CoreLogic",
    "city":"Austin",
    "state":"TX",
    "country":"US",
    "date":"Fri, 19 Jul 2013 17:22:19 GMT",
        "education":[  
        "MS, PHD"
    ],
    "gpa":"3.5",
    "requiredskills":[  
        "C",
        "C++",
        "OpenCV",
        "Matlab"
    ],
    "optionalskills":[  
        "3D modeling",
        "rendering"
    ],
    "experience":"3 years",
    "certification":["xyz"],
    "description":"We are looking for a strong practitioner in computer vision to help build interactive virtual reality (VR) computing platforms. This is an opportunity to design, implement, productize, and ship cutting-edge computer vision algorithms enabling next generation interactive VR products. Of primary importance is the ability to create efficient, high-performance, low-latency, interactive user tracking solutions suitable to desktop CPUs and embedded system environments. In addition, the individual should have wide-ranging experience in computer vision and tracking, including 2D image processing, 3D vision algorithms, and camera calibration techniques.",
    "responsibilities":"Drive development of algorithms for systems that enable high-precision, low-latency tracking of users and peripherals in the environment of VR hardware platforms. Support the development of analytical metrics and methods to guide design and evaluation of early prototypes for next generation VR tracking HW architectures. Provide software support for concept studies and early prototypes to validate prospective hardware and software architectural options. Deliver robust, high-performance computer vision algorithms in C/C++ on both desktop CPU environments and embedded processor systems. Support manufacturing teams by defining procedures and documentation for testing, calibration and validation of vision hardware and software subsystems in production environments. Work cross-functionally across software, firmware and hardware teams to produce high-quality integrated solutions."
}

```
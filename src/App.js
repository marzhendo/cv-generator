import React, { useState } from 'react';
import { Download, Plus, Trash2 } from 'lucide-react';

export default function ATSCVGenerator() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    experiences: [{ company: '', position: '', period: '', description: '' }],
    education: [{ institution: '', degree: '', year: '' }],
    skills: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [...formData.experiences, { company: '', position: '', period: '', description: '' }]
    });
  };

  const removeExperience = (index) => {
    const newExp = formData.experiences.filter((_, i) => i !== index);
    setFormData({ ...formData, experiences: newExp });
  };

  const handleExperienceChange = (index, field, value) => {
    const newExp = [...formData.experiences];
    newExp[index][field] = value;
    setFormData({ ...formData, experiences: newExp });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { institution: '', degree: '', year: '' }]
    });
  };

  const removeEducation = (index) => {
    const newEdu = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEdu });
  };

  const handleEducationChange = (index, field, value) => {
    const newEdu = [...formData.education];
    newEdu[index][field] = value;
    setFormData({ ...formData, education: newEdu });
  };

  const downloadCV = () => {
    const cvContent = `
${formData.fullName}
${formData.email} | ${formData.phone} | ${formData.location}

PROFESSIONAL SUMMARY
${formData.summary}

WORK EXPERIENCE
${formData.experiences.map(exp => `
${exp.position} at ${exp.company}
${exp.period}
${exp.description}
`).join('\n')}

EDUCATION
${formData.education.map(edu => `
${edu.degree}
${edu.institution} | ${edu.year}
`).join('\n')}

SKILLS
${formData.skills}
    `.trim();

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.fullName.replace(/\s+/g, '_')}_CV.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">ATS-Friendly CV Generator</h1>
          <p className="text-gray-600">Buat CV yang mudah dibaca oleh sistem ATS</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Form Input */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Input Informasi</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Telepon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+62 812 3456 7890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Lokasi</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Jakarta, Indonesia"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Ringkasan Profesional</label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ringkasan singkat tentang pengalaman dan keahlian Anda"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium">Pengalaman Kerja</label>
                  <button
                    onClick={addExperience}
                    className="text-blue-600 hover:text-blue-700 flex items-center text-sm"
                  >
                    <Plus size={16} className="mr-1" /> Tambah
                  </button>
                </div>
                {formData.experiences.map((exp, index) => (
                  <div key={index} className="border border-gray-200 rounded-md p-3 mb-3 relative">
                    {formData.experiences.length > 1 && (
                      <button
                        onClick={() => removeExperience(index)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded mb-2 text-sm"
                      placeholder="Posisi"
                    />
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded mb-2 text-sm"
                      placeholder="Nama Perusahaan"
                    />
                    <input
                      type="text"
                      value={exp.period}
                      onChange={(e) => handleExperienceChange(index, 'period', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded mb-2 text-sm"
                      placeholder="Periode (contoh: Jan 2020 - Des 2022)"
                    />
                    <textarea
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                      rows="2"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      placeholder="Deskripsi pekerjaan dan pencapaian"
                    />
                  </div>
                ))}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium">Pendidikan</label>
                  <button
                    onClick={addEducation}
                    className="text-blue-600 hover:text-blue-700 flex items-center text-sm"
                  >
                    <Plus size={16} className="mr-1" /> Tambah
                  </button>
                </div>
                {formData.education.map((edu, index) => (
                  <div key={index} className="border border-gray-200 rounded-md p-3 mb-3 relative">
                    {formData.education.length > 1 && (
                      <button
                        onClick={() => removeEducation(index)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded mb-2 text-sm"
                      placeholder="Gelar / Jurusan"
                    />
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded mb-2 text-sm"
                      placeholder="Nama Institusi"
                    />
                    <input
                      type="text"
                      value={edu.year}
                      onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      placeholder="Tahun Lulus"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Keahlian</label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Pisahkan dengan koma (contoh: JavaScript, React, Node.js)"
                />
              </div>

              <button
                onClick={downloadCV}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center"
              >
                <Download size={20} className="mr-2" /> Download CV
              </button>
            </div>
          </div>

          {/* Preview CV */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Preview CV</h2>
            <div className="border border-gray-300 rounded-md p-6 bg-gray-50 font-mono text-sm overflow-auto max-h-screen">
              <div className="font-bold text-lg mb-2">{formData.fullName || 'Nama Lengkap'}</div>
              <div className="text-gray-600 mb-4">
                {formData.email || 'email@example.com'} | {formData.phone || '+62 xxx'} | {formData.location || 'Lokasi'}
              </div>

              {formData.summary && (
                <>
                  <div className="font-bold mt-4 mb-2">PROFESSIONAL SUMMARY</div>
                  <div className="text-gray-700 whitespace-pre-wrap">{formData.summary}</div>
                </>
              )}

              <div className="font-bold mt-4 mb-2">WORK EXPERIENCE</div>
              {formData.experiences.map((exp, index) => (
                <div key={index} className="mb-3">
                  <div className="font-semibold">{exp.position || 'Posisi'} at {exp.company || 'Perusahaan'}</div>
                  <div className="text-gray-600 text-xs">{exp.period || 'Periode'}</div>
                  <div className="text-gray-700 whitespace-pre-wrap mt-1">{exp.description}</div>
                </div>
              ))}

              <div className="font-bold mt-4 mb-2">EDUCATION</div>
              {formData.education.map((edu, index) => (
                <div key={index} className="mb-2">
                  <div className="font-semibold">{edu.degree || 'Gelar / Jurusan'}</div>
                  <div className="text-gray-600 text-xs">{edu.institution || 'Institusi'} | {edu.year || 'Tahun'}</div>
                </div>
              ))}

              {formData.skills && (
                <>
                  <div className="font-bold mt-4 mb-2">SKILLS</div>
                  <div className="text-gray-700">{formData.skills}</div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center py-4 text-gray-600 text-sm">
          © {new Date().getFullYear()} Marzhendo. All rights reserved.
        </div>
      </div>
    </div>
  );
}
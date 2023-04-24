import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inertia } from '@inertiajs/inertia';
import Navbar from '../Component/Navbar';


const UploadArticleScreen = ({categories}) => {
  const [articleTitle, setArticleTitle] = useState('');
  const [articleDescription, setArticleDescription] = useState('');
  const [articleCategory, setArticleCategory] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [articleImage, setArticleImage] = useState(null);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g. send the article data to an API endpoint

    if(articleTitle==""){
      toast('please type the title');
    }
    else if(articleDescription==''){
        toast('Please type the short Description');
      }
    else if(articleCategory==''){
      toast('Please select the category');
    }
    else if(articleCategory==0){
        toast('Please select the category');
      }
    else if(articleContent==''){
      toast('Please type the article');
    }
    else if(articleImage==null){
      toast('Please select an image');
    }
    else{

        toast(articleCategory);
      Inertia.post('/uploadarticle', {articleTitle,articleDescription,articleCategory,articleContent,articleImage},{
        preserveScroll: true,
        onSuccess: () => {
            
          setArticleTitle('');
          setArticleCategory('');
          setArticleContent('');
          setArticleImage(null);
          
        }
  
    })
    }

  
    
  };

  

  const notify = () => toast('Article Uploaded');

  return (
    <div>
        <Navbar/>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="articleTitle">
          Article Titles
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="articleTitle"
          type="text"
          placeholder="Article Title"
          value={articleTitle}
          onChange={(event) => setArticleTitle(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="articleTitle">
          Article Description or Summary
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="articleTitle"
          type="text"
          placeholder="Article Description(Make very it Short about 50 words)"
          value={articleDescription}
          onChange={(event) => setArticleDescription(event.target.value)}
        />
      </div>
      <div className='mb-4'>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="articleCategory">
      Article Category
        </label>
      <select placeholder="Article Category" id='articleCategory' value={articleCategory} onChange={(event) => setArticleCategory(event.target.value)} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
        <option value={0}>Select a category....</option>
                {categories.map((category)=>
                   <option key={category.id} value={category.id}>{category.name}</option>
                )}
                          
            </select>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="articleContent">
          Article Content
        </label>
        <CKEditor
          editor={ClassicEditor}

          data={articleContent}
          onChange={(event, editor) => setArticleContent(editor.getData())}
        />
        
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="articleImage">
          Article Image
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="articleImage"
          type="file"
          accept="image/*"
          onChange={(event) => setArticleImage(event.target.files[0])}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Upload Article
        </button>
        <ToastContainer />
      </div>
    </form>
    </div>
  );
};

export default UploadArticleScreen;

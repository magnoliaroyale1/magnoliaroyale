import { useState, useEffect } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase'
import type { Clinic } from '../types'

export const useClinics = () => {
  const [clinics, setClinics] = useState<Clinic[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const q = query(collection(db, 'clinics'), where('status', '==', 'approved'))
        const snapshot = await getDocs(q)
        const clinicsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Clinic))
        setClinics(clinicsData)
      } catch (error) {
        console.error('Error fetching clinics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchClinics()
  }, [])

  return { clinics, loading }
}